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



    // const r = await pool.query(`
    //     WITH ranked_scores AS (
    //         SELECT *,
    //             ROW_NUMBER() OVER (ORDER BY high_score DESC) AS rank
    //         FROM scores
    //     )
    //     SELECT *
    //     FROM ranked_scores
    //     WHERE rank BETWEEN (SELECT rank FROM ranked_scores WHERE steam_id = '${steam_id}') - 5
    //     AND (SELECT rank FROM ranked_scores WHERE steam_id = '${steam_id}') + 5;
    // `);

    const r = await pool.query(`
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
        UNION
        SELECT *
        FROM ranked_scores
        WHERE rank <= 3
    ) AS combined_results
    ORDER BY rank;
    `);

    // const r = await pool.query(`
    //     WITH ranked_scores AS (
    //         SELECT
    //             steam_id,
    //             high_score,
    //             username,
    //             ROW_NUMBER() OVER (ORDER BY high_score DESC) AS rank
    //         FROM
    //             scores
    //     ),
    //     user_rank AS (
    //         SELECT
    //             steam_id,
    //             high_score,
    //             username,
    //             rank
    //         FROM
    //             ranked_scores
    //         WHERE
    //             steam_id = '${steam_id}'
    //     ),
    //     user_neighbors AS (
    //         SELECT
    //             steam_id,
    //             high_score,
    //             username,
    //             rank
    //         FROM
    //             ranked_scores
    //         WHERE
    //             rank >= (SELECT rank FROM user_rank) - 1
    //         AND
    //             rank <= (SELECT rank FROM user_rank) + 1
    //     )
    //     SELECT * FROM user_rank
    //     UNION ALL
    //     SELECT * FROM user_neighbors
    //     ORDER BY rank;
    // `);
    console.log(r.rows);

    return res.send({rows: r.rows});
}