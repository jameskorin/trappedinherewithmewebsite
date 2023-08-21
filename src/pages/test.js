import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Test() {

    const [called, setCalled] = useState(false);

    useEffect(()=> {
        submitScore();
    },[])

    const submitScore = async () => {
        if(called) return null;
        setCalled(true);
        // const r = await axios.post('/api/submitScore', {
        //     steam_id: 'fweiwefi',
        //     score: 32,
        //     username: 'knoland'
        // });
        const r = await axios.post('/api/getRank', {
            steam_id: 'def456'
        });
        console.log(r.data);

        // const d = await axios.get('/api/populateTestData');
        // console.log(d.data);
        // console.log(d.data);
    }

    return null;
}