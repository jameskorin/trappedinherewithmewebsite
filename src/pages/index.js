import Head from 'next/head'
import {
  Outer, 
  Body,
  Link,
  CTA,
  BGContainer,
  FadeIn
} from '../styledComponents'
import Image from 'next/image'
import MuxPlayer from '@mux/mux-player-react'

export default function Home() {
  return (
    <Outer>
      <Head>
        <title>TRAPPED IN HERE WITH ME</title>
        <meta name="description" content="TRAPPED IN HERE WITH ME - developed by James Korin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src="/title.png" width="571" height="199"
      style={imageStyle}/>

      <BGContainer>

        {/* Gameplay */}
        <MuxPlayer 
        streamType="on-demand"
        muted
        autoPlay="muted"
        loop
        playbackId="INOrTjGATiaMvXWRcPmkOLM01TrDNrCj7d9WpEKVfP4s"
        style={{
          position: 'absolute',
          maxWidth: 'min(571px, 100vw)',
          aspectRatio: 'auto 1 / 1',
          height: 'auto',
          zIndex: '1',
          objectFit: 'cover'
        }}/>

        {/* 
          White background over the video that fades in after a second. 
          This obscures first frame wonkiness with the video player that I failed to fix with css.
        */}
        <FadeIn/>

        {/* CTA for beta download */}
        <CTA href="https://testflight.apple.com/join/dlP4J2Nh">Play the beta now!</CTA>

        {/* Credits */}
        <Body bg>Game by <Link href='https://jameskor.in'>James Korin</Link></Body>
        <Body bg>Music and sound by <Link href='https://www.instagram.com/actionsmackson/'>Jackson Roe</Link></Body>
        <Body bg>UI animations by <Link href='https://www.davidleefiddler.com/'>D1337</Link></Body>
        <Body bg>Arcade cabinet by <Link href='https://www.linkedin.com/in/jonbblair/'>Jonathan Blair</Link></Body>

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
}