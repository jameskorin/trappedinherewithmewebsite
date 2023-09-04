'use client'

import styled from 'styled-components'
import Head from 'next/head'

export default function UI({ score }) {
    return <Outer>
        <Head>
            <title>TRAPPED IN HERE WITH ME</title>
            <meta name="description" content="A lightning fast arcade shooter" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="apple-itunes-app" content="app-id=6449551613"></meta>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Headline>I scored</Headline>
        <Score>{score}</Score>
        <Headline>Can you beat that?</Headline>
        <GradientCircle/>
        
    </Outer>;
}

const Outer = styled.div`
    background: #333333;
    height: 100vh;
    width: 100vw;
    padding-top: 100px;
`;
const Headline = styled.div`
    font-size: 24px;
    width: 100%;
    text-align: center;
    font-family: video-light;
`;
const Score = styled.div`
    font-size: 96px;
    width: 100%;
    text-align: center;
    font-family: video-bold;
`;

const GradientCircle = styled.div`
    position: absolute;
    left: -50%;
    top: calc(100vh - 300px);
    width: 200vw;
    height: 200vw;
    border-radius: 100vw;
    background: linear-gradient(90deg, #8A2387 14.27%, #E94057 48.78%, #F27121 86.52%);
`;