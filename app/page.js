'use client'
import React from 'react'
import Head from 'next/head'
import {
  Outer,
  BGContainer,
  FadeIn
} from './styledComponents'
import Image from 'next/image'
import MuxPlayer from '@mux/mux-player-react'
import styled, { css } from 'styled-components'
import './globals.css'

export default function Home() {

  return (
    <Outer>
      <Head>
        <title>TRAPPED IN HERE WITH ME</title>
        <meta name="description" content="TRAPPED IN HERE WITH ME - developed by James Korin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-itunes-app" content="app-id=6449551613"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src="/title.png" width="571" height="199"
      style={imageStyle}/>

      <BGContainer>

        {/* Gameplay */}
        <MuxPlayer 
        className='mux-home-page'
        streamType="on-demand"
        muted
        autoPlay="muted"
        loop
        playbackId="INOrTjGATiaMvXWRcPmkOLM01TrDNrCj7d9WpEKVfP4s"/>

        {/* 
          White background over the video that fades in after a second. 
          This obscures first frame wonkiness with the video player that I failed to fix with css.
        */}
        <FadeIn/>

        {/* CTA for beta download */}
        <PlatformList>
          <PlayNow>Play now!</PlayNow>
          <a href="https://apps.apple.com/us/app/trapped-in-here-with-me/id6449551613"><img src="/app-store-badge-white.svg"/></a>
          <a href="https://store.steampowered.com/app/2584310/Trapped_In_Here_With_Me/"><SteamLogo src="/steam-grey.svg"/></a>
        </PlatformList>

        <CreditsButton href='/credits'>Credits</CreditsButton>
      </BGContainer>
    </Outer>
  )
}

const imageStyle = {
  width: '571px',
  maxWidth: 'calc(100vw - 20px)',
  aspectRatio: 'auto 571 / 199',
  height: 'auto',
  margin: '0px 0px 0px -5px',
  zIndex: '10'
};
const SteamLogo = styled.img`
    width: 40px;
    height: 40px;
`;
const CreditsButton = styled.a`
    cursor: pointer;
    color: #333333;
    font-family: video-light;
    font-size: 18px;
    margin-top: 20px;
    z-index: 100;
`;
const PlatformList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 571px;
    max-width: 400px;
    z-index: 100;

    a {
      cursor: pointer;
    }
`;
const PlayNow = styled.div`
  font-family: video-light;
`;