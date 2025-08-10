import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  const title = 'How AI Is Changing Mortgage Underwriting in 2025'
  return new ImageResponse(
    (
      <div style={{
        height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 80,
        background: 'linear-gradient(135deg, #0a3a7a 0%, #0f4fa6 100%)', color: 'white'
      }}>
        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.1 }}>{title}</div>
        <div style={{ marginTop: 24, fontSize: 28, opacity: 0.9 }}>TheMortgageEstimator.com</div>
      </div>
    ),
    size
  )
}