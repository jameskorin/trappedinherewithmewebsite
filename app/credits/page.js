'use client'
import React from 'react'
import {
    Body,
    Link
} from '@/app/styledComponents'
import styled from 'styled-components'

export default function Credits() {
    return <Outer>
        <BackButton href='/'>back</BackButton>
        <Title>CREDITS</Title>
        <Credit bg>Game by <Link href='https://jameskor.in'>James Korin</Link></Credit>
        <Credit bg>Music and sound by <Link href='https://www.instagram.com/actionsmackson/'>Jackson Roe</Link></Credit>
        <Credit bg>UI animations by <Link href='https://www.davidleefiddler.com/'>D1337</Link></Credit>
        <Credit bg>Arcade cabinet by <Link href='https://www.linkedin.com/in/jonbblair/'>Jonathan Blair</Link></Credit>
    </Outer>;
};

const Outer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #FFFFFF;
    color: #333333;
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Credit = styled.div`
    font-family: video-light;
    margin-bottom: 20px;
`;
const Title = styled.div`
    font-family: video-bold;
    font-size: 48px;
    margin-bottom: 10px;
`;
const BackButton = styled.a`
    font-family: video-light;
    position: absolute;
    top: 10px;
    left: 10px;
`;