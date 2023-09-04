import { ImageResponse } from 'next/server'
import { Decode } from './scoreCoding' 

// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = 'Trapped In Here With Me'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image({ params }) {
  
const videoBold = await fetch(
  new URL('@/public/fonts/Video-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());
const videoLight = await fetch(
  new URL('@/public/fonts/Video-Light.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div style={outer}>
        <div style={content}>
          <div style={headline}>I scored</div>
          <div style={score}>{Decode(params.score)}</div>
          <div style={headline}>Can you beat that?</div>
        </div>
        <div style={gradientCircle}/>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "VideoBold",
          data: videoBold,
          style: "normal",
          weight: 700,
        },
        {
          name: "VideoLight",
          data: videoLight,
          style: "normal",
          weight: 700,
        },
      ],
    }
  )
}

const outer = {
  background: '#333333',
  color: '#FFFFFF',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center'
};
const content = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingTop: '0px'
};
const headline = {
  fontSize: '48px',
  textAlign: 'center',
  fontFamily: 'VideoLight'
}
const score = {
  fontSize: '128px',
  fontFamily: 'VideoBold'
};
const gradientCircle = {
  position: 'absolute',
  left: '-150px',
  top: '383px',
  width: '1500px',
  height: '1500px',
  borderRadius: '1500px',
  background: 'linear-gradient(90deg, #8A2387 14.27%, #E94057 48.78%, #F27121 86.52%)'
};

