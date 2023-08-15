// Gets the user's row, rank, and the 5 above and below the user

import { Pool } from 'pg'

const postgres = {
  user: 'postgres',
  host: 'db.ufzkwbydugnwpjwnjpdn.supabase.co',
  database: 'postgres',
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
}

export default async function handler(req, res) {
    const { steam_id } = req.body;

    const pool = new Pool(postgres);

    const r = await pool.query(`
        WITH ranked_scores AS (
            SELECT *,
                ROW_NUMBER() OVER (ORDER BY high_score DESC) AS rank
            FROM scores
        )
        SELECT *
        FROM ranked_scores
        WHERE rank BETWEEN (SELECT rank FROM ranked_scores WHERE steam_id = '${steam_id}') - 5
        AND (SELECT rank FROM ranked_scores WHERE steam_id = '${steam_id}') + 5;
    
    `);
    console.log(r.rows);

    return res.send({rows: r.rows});
}