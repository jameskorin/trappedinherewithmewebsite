import { ImageResponse } from 'next/server'
 
// Route segment config
export const runtime = 'experimental-edge'
 
// Image metadata
export const alt = 'Trapped In Here With Me'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default function Image({
  params
}) {
 
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 96,
          background: '#333333',
          color: '#FAFAFA',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {params.score}
      </div>
    ), {
      ...size,
    }
  )
}