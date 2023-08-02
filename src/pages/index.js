import Head from 'next/head'
import {
  Outer, 
  Body,
  Title,
  Link,
  CTA,
  BGContainer
} from '../styledComponents'
import Image from 'next/image'

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
        {/* <div dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="/bg_gameplay_1.mp4"
        />,
      ` }}></div> */}
        <video autoPlay loop muted playsinline style={bgStyle}>
          <source src="/bg_gameplay_1.mp4" />
        </video>

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

const bgStyle = {
  width: '1080px', 
  position: 'absolute',
  maxWidth: 'min(1080px, 100vw)',
  aspectRatio: 'auto 1 / 1',
  height: 'auto',
  zIndex: '1',
}