import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Styluxe Interior Decor'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ background: '#0D1C2E', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '80px', position: 'relative' }}>
        <div style={{ width: '100%', height: '4px', background: '#C4A24A', position: 'absolute', top: 0, left: 0 }} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
          <div style={{ fontSize: '16px', letterSpacing: '0.3em', color: '#C4A24A', marginBottom: '20px', fontFamily: 'serif' }}>PREMIUM TURNKEY INTERIOR DESIGN</div>
          <div style={{ fontSize: '96px', fontWeight: '700', color: '#FAF7F2', lineHeight: '1', fontFamily: 'serif', letterSpacing: '-0.02em' }}>STYLUXE</div>
          <div style={{ fontSize: '32px', color: '#C4A24A', letterSpacing: '0.2em', marginTop: '8px', fontFamily: 'serif' }}>INTERIOR DECOR</div>
          <div style={{ fontSize: '24px', color: 'rgba(250,247,242,0.5)', marginTop: '32px', fontFamily: 'sans-serif', fontWeight: '300' }}>Crafting Spaces That Define You</div>
          <div style={{ fontSize: '16px', color: 'rgba(196,162,74,0.5)', marginTop: '60px', letterSpacing: '0.15em' }}>EST. 2013 · AHMEDABAD, GUJARAT</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
