import { NextResponse } from 'next/server'
import { Pool } from 'pg'
import dotenv from 'dotenv'
dotenv.config();
import axios from 'axios'
import paramsToJSON from '@/app/util/paramsToJSON'

const postgres = {
  user: 'postgres',
  host: 'db.ufzkwbydugnwpjwnjpdn.supabase.co',
  database: 'postgres',
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
}

export async function POST(req) {
    const { steam_id, token } = paramsToJSON(req.url);

    // Validate session
    const path = 'https://partner.steam-api.com/ISteamUserAuth/AuthenticateUserTicket/v1/';
    const v = await axios.get(path, { 
        params: {
            key: process.env.STEAM_WEB_API_KEY,
            appid: 2584310,
            ticket: token,
            identity: 'gameclient'
        }
    });
    const id = v.data.response.params.steamid;

    if(steam_id !== id) {
        return NextResponse.json({error: 'invalid auth session'});
    } else {
        console.log('id matches ticket');
    }

    // Get the user's steam friends
    const friend_count_path = `http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=${process.env.STEAM_WEB_API_KEY}&steamid=${id}&relationship=friend`;
    const c = await axios.get(friend_count_path, {
        params: {
            key: process.env.STEAM_WEB_API_KEY,
            appid: 2584310,
            ticket: token,
            identity: 'gameclient'
        }
    });
    const friends = c.data.friendslist.friends;

    // Get the rows from the db with the steam ids of the friends
    let ids = [steam_id];
    for(let i = 0; i < friends.length; ++i)
        ids.push(friends[i].steamid);
    
    // Return rows ordered highest to lowest score
    const query = {
        text: 'SELECT * FROM scores WHERE steam_id = ANY($1)',
        values: [ids]
    };
    const pool = new Pool(postgres);
    const r = await pool.query(query);
    let rows = r.rows.sort((a,b) => parseInt(a.high_score) > parseInt(b.high_score) ? -1:1);
    for(let i = 0; i < rows.length; ++i)
        rows[i].rank = i + 1;

    return NextResponse.json({rows: rows});
}