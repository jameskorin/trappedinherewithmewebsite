import { Pool } from 'pg'

// import { createClient } from '@supabase/supabase-js'
// const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);

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
        SELECT COUNT(*) + 1 AS rank
        FROM scores
        WHERE high_score > (SELECT high_score FROM scores WHERE steam_id = '${steam_id}');
    `);
    console.log(r.rows);

    return res.send('done');

}