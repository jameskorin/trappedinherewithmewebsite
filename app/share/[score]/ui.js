'use client'

import styled from 'styled-components'

export default function UI({ score }) {
    return <Outer>
        <Score>{score}</Score>
        <GradientCircle/>
    </Outer>;
}

const Outer = styled.div`
    background: #333333;
    min-height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    width: 100vw;
    padding-top: 100px;
`;
const Score = styled.div`
    font-size: 96px;
    width: 100%;
    text-align: center;
    font-family: video-bold;
`;

const GradientCircle = styled.div`
    position: absolute;
    left: 0px;
    top: 275px;
    width: 100vw;
    height: 100vw;
    border-radius: 1200px;
    background: linear-gradient(90deg, #8A2387 14.27%, #E94057 48.78%, #F27121 86.52%);
`;