'use client'

import styled from 'styled-components'

export default function UI({ score }) {
    return <Outer>
        <Score>{score}</Score>
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