import Head from 'next/head'
import {
  Outer, 
  Body,
  Title,
  Link
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
      <Body>Coming to the iOS App Store soon</Body>
      <Body>Game by <Link href='https://jameskor.in'>James Korin</Link></Body>
      <Body>Music and sound by <Link href='https://www.instagram.com/actionsmackson/'>Jackson Roe</Link></Body>
      <Body>UI animations by <Link href='https://www.davidleefiddler.com/'>Davia Lee Fiddler</Link></Body>
      <Body>Arcade cabinet by <Link href='https://www.linkedin.com/in/jonbblair/'>Jonathan Blair</Link></Body>
    </Outer>
  )
}

const imageStyle = {
  width: '571px',
  maxWidth: 'calc(100vw - 20px)',
  aspectRatio: 'auto 571 / 199',
  height: 'auto',
  margin: '0px 0px 0px -5px'
}