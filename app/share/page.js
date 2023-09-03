'use client'
import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

export default function Share() {
    // Get the score from the query param
    // Render a page displaying the score
    // Serve an image of that server rendered page as the preview for the page

    return <Outer>
        <Score>{10}</Score>
    </Outer>;
}


const Outer = styled.div`
    background: #333333;
    min-height: 100vh;
    width: 100vw;
    @import url("https://fonts.googleapis.com/css?family=Inter:400,700&display=swap");
    font-family: "Inter", sans-serif;
    padding-top: 100px;
`;
const Score = styled.div`
    font-size: 96px;
    width: 100%;
    text-align: center;
`;