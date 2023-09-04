'use client'

import styled from 'styled-components'
import Head from 'next/head'

export default function UI({ score }) {
    return <Outer>
        <Head>
            <title>Play TRAPPED IN HERE WITH ME</title>
            <meta name="description" content="A lightning fast arcade shooter" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="apple-itunes-app" content="app-id=6449551613"></meta>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Content>
            <Headline>I scored</Headline>
            <Score>{score}</Score>
            <Headline>Can you beat that?</Headline>
        </Content>
        <GradientCircle>
            <Button href="https://apps.apple.com/us/app/trapped-in-here-with-me/id6449551613">
                Play on iOS! <img src="/app-store-badge.svg"/>
            </Button>
        </GradientCircle>
    </Outer>;
}

const Outer = styled.div`
    background: #333333;
    height: 100vh;
    width: 100vw;
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: calc(calc(100vh - 300px) / 3);
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
    position: fixed;
    left: -50%;
    top: calc(100vh - 300px);
    width: 200vw;
    height: 200vw;
    border-radius: 100vw;
    background: linear-gradient(90deg, #8A2387 14.27%, #E94057 48.78%, #F27121 86.52%);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;
const Button = styled.a`
    font-family: video-light;
    background: #FFFFFF;
    color: #333333;
    border-radius: 100px;
    padding: 10px 20px;
    margin-top: calc(calc(calc(100vh - calc(100vh - 300px))/2) - 20px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: calc(100vw - 80px);
    max-width: 300px;
`;