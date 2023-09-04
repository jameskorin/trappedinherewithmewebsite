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
  
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: '#333333',
          color: '#FFFFFF',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
        style={{
          fontWeight: 700,
          marginTop: '60px'
        }}
        >{Decode(params.score)}</div>
        <div
        style={{
          position: 'absolute',
          left: '0px',
          top: '275px',
          width: '1200px',
          height: '1200px',
          borderRadius: '1200px',
          background: 'linear-gradient(90deg, #8A2387 14.27%, #E94057 48.78%, #F27121 86.52%)'
        }}/>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}