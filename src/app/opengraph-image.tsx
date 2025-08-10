import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a3a7a 0%, #0f4fa6 100%)',
          color: 'white',
          fontSize: 64,
          fontWeight: 800,
          letterSpacing: -1,
          textAlign: 'center',
        }}
      >
        TheMortgageEstimator.com
      </div>
    ),
    {
      ...size,
    }
  )
}