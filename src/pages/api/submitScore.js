import { Pool } from 'pg'

const postgres = {
  user: 'postgres',
  host: 'db.ufzkwbydugnwpjwnjpdn.supabase.co',
  database: 'postgres',
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
}

export default async function handler(req, res) {
    const { score, steam_id, username } = req.body;
    console.log({score: score, steam_id: steam_id, username: username});

    const pool = new Pool(postgres);

    // Get the user's current high score
    const r = await pool.query(`SELECT * FROM scores WHERE steam_id = '${steam_id}';`);

    // If there is no row for this user, create one and return
    if(r.rows.length === 0) {
        await pool.query(`
            INSERT INTO scores (steam_id, high_score, username, high_score_time)
            VALUES ('${steam_id}', ${score}, '${username}', to_timestamp(${Date.now()} / 1000.0));        
        `);
        return res.send('new row');
    }

    // If the user's new score is higher than that, update their score
    // If their username is updated, update that as well
    const old_score = (r.rows[0].high_score);
    const old_name = r.rows[0].username;
    if(score > old_score || old_name !== username) {
        await pool.query(`
            UPDATE scores
            SET high_score = ${Math.max(old_score, score)}, username = '${username}' ${score > old_score ? `, high_score_time = to_timestamp(${Date.now()} / 1000.0)`:``}
            WHERE steam_id = '${steam_id}';        
        `);
    }
    return res.send('done');
}