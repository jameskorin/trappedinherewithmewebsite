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
        <Image src="/gameplay_still.png" width="607" height="606" style={bgStyle}/>

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
  width: '607px', 
  position: 'absolute',
  maxWidth: 'min(500px, calc(100vw - 20px))',
  aspectRatio: 'auto 607 / 606',
  height: 'auto',
  zIndex: '1',
  
}