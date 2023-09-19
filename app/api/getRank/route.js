// Gets the user's row, rank, and the 5 above and below the user
import { NextResponse } from 'next/server'
import { Pool } from 'pg'
import paramsToJSON from '@/app/util/paramsToJSON'

const postgres = {
  user: 'postgres',
  host: 'db.ufzkwbydugnwpjwnjpdn.supabase.co',
  database: 'postgres',
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
}

export async function POST(req) {

    const { steam_id } = paramsToJSON(req.url);
    console.log(steam_id);

    const pool = new Pool(postgres);

    const user_segment_query = `
    WITH ranked_scores AS (
        SELECT *,
            ROW_NUMBER() OVER (ORDER BY high_score DESC) AS rank
        FROM scores
    )
    SELECT *
    FROM (
        SELECT *
        FROM ranked_scores
        WHERE rank BETWEEN (SELECT rank FROM ranked_scores WHERE steam_id = '${steam_id}') - 5
        AND (SELECT rank FROM ranked_scores WHERE steam_id = '${steam_id}') + 5
    ) AS combined_results
    ORDER BY rank;
    `;
    const top_three_query = `
    SELECT *,
       ROW_NUMBER() OVER (ORDER BY high_score DESC) AS rank
    FROM scores
    ORDER BY high_score DESC
    LIMIT 3;
    `;

    let promises = [pool.query(user_segment_query),pool.query(top_three_query)];
    const p = await Promise.all(promises);
    const user_segment = p[0].rows;
    const top_three = p[1].rows;
    let rows = top_three;
    for(let i = 0; i < user_segment.length; ++i) {
        
        // Check if rows already contains this user
        const e = rows.find(a => a.steam_id === user_segment[i].steam_id);

        // If it does, continue
        if(e !== undefined) continue;

        // If it does not, add to the array
        rows.push(user_segment[i]);
    }

    console.log(rows);
    return NextResponse.json({ rows: rows });
}