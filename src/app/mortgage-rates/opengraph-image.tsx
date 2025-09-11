import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Current Mortgage Rates - TheMortgageEstimator.com'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1e3a8a',
          backgroundImage: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            padding: '40px',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              margin: '0 0 20px 0',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            }}
          >
            Current Mortgage Rates
          </h1>
          <p
            style={{
              fontSize: '28px',
              margin: '0 0 40px 0',
              opacity: 0.9,
              maxWidth: '800px',
            }}
          >
            Daily updates on 30-year, 15-year, FHA, VA, and Jumbo loan rates
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '20px 40px',
              borderRadius: '12px',
              border: '2px solid rgba(255,255,255,0.2)',
            }}
          >
            <span
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#60a5fa',
                marginRight: '20px',
              }}
            >
              7.125%
            </span>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  fontSize: '24px',
                  fontWeight: '600',
                }}
              >
                30-Year Fixed
              </span>
              <span
                style={{
                  fontSize: '18px',
                  opacity: 0.8,
                }}
              >
                National Average
              </span>
            </div>
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              fontSize: '24px',
              fontWeight: '600',
              opacity: 0.8,
            }}
          >
            TheMortgageEstimator.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}