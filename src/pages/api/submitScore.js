import { Pool } from 'pg'
import dotenv from 'dotenv'
dotenv.config();

const postgres = {
  user: 'postgres',
  host: 'db.ufzkwbydugnwpjwnjpdn.supabase.co',
  database: 'postgres',
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
}

export default async function handler(req, res) {
    const { score, steam_id, username } = req.body;
    const new_score = parseInt(score);
    console.log({score: new_score, steam_id: steam_id, username: username, token: token});
    

    const pool = new Pool(postgres);

    // Get the user's current high score
    const r = await pool.query(`SELECT * FROM scores WHERE steam_id = '${steam_id}';`);

    if (r.rows.length > 1) {
        console.log('hey');
    }

    // If there is no row for this user, create one and return
    if(r.rows.length === 0) {
        await pool.query(`
            INSERT INTO scores (steam_id, high_score, username, high_score_time)
            VALUES ('${steam_id}', ${new_score}, '${username}', to_timestamp(${Date.now()} / 1000.0));        
        `);
        return res.send('new row');
    }

    // If the user's new score is higher than that, update their score
    // If their username is updated, update that as well
    const old_score = (r.rows[0].high_score);
    const old_name = r.rows[0].username;
    if(new_score > old_score || old_name !== username) {
        await pool.query(`
            UPDATE scores
            SET high_score = ${Math.max(old_score, new_score)}, username = '${username}' ${new_score > old_score ? `, high_score_time = to_timestamp(${Date.now()} / 1000.0)`:``}
            WHERE steam_id = '${steam_id}';        
        `);
    }
    return res.send('done');
}