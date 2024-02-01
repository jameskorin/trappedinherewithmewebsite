// Gets the user's row

import { NextResponse } from 'next/server'
import { Pool } from 'pg'
import paramsToJSON from '@/app/util/paramsToJSON'
import { postgres } from '@/app/util/postgres'

export async function POST(req) {

    const { steam_id } = paramsToJSON(req.url);
    console.log(steam_id);

    const pool = new Pool(postgres);

    const r = await pool.query(`SELECT * FROM scores WHERE steam_id = '${steam_id}'`);

    console.log(r.rows);

    const score = r.rows === undefined || r.rows.length === 0 ? 0 :
    r.rows[0].high_score;

    return NextResponse.json({ score: score });
}