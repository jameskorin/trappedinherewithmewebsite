'use client'

import React, { useEffect } from 'react'
import axios from 'axios'

export default function Test() {
    useEffect(() => {
        submit();
    },[])

    const submit =async ()=> {
        const r = await axios.post('/api/submitScore',{
            score: 1,
            steam_id: 'abc123',
            username: 'mclovin',
            token: 'def456'
        });
        console.log(r.data);
    }
    return null;
}