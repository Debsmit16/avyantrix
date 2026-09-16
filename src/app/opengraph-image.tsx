import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Avyantrix | Technology, Innovation & Ventures';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#08090b',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Subtle red glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(225, 29, 72, 0.25) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Top Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: '#e11d48',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '28px',
              fontWeight: 'bold',
            }}
          >
            A
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '32px',
                fontWeight: 'bold',
                letterSpacing: '0.15em',
                color: '#ffffff',
              }}
            >
              AVYANTRIX
            </span>
            <span
              style={{
                fontSize: '14px',
                letterSpacing: '0.25em',
                color: '#f43f5e',
                textTransform: 'uppercase',
              }}
            >
              ENGINEERING • INNOVATION • VENTURES
            </span>
          </div>
        </div>

        {/* Main Center Message */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              fontSize: '56px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
              maxWidth: '950px',
            }}
          >
            Engineering ideas into real-world impact.
          </div>
          <div
            style={{
              fontSize: '24px',
              color: '#94a3b8',
              maxWidth: '850px',
              lineHeight: 1.4,
            }}
          >
            Deep-tech organisation pioneering integrated biomedical IoT, edge TinyML intelligence, and scalable ventures.
          </div>
        </div>

        {/* Bottom Coordinates & Badges */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '30px',
          }}
        >
          <div style={{ display: 'flex', gap: '24px', color: '#64748b', fontSize: '16px' }}>
            <span>NODE: KOLKATA, INDIA</span>
            <span>•</span>
            <span>VENTURES: WREV</span>
            <span>•</span>
            <span>RESEARCH: TINYML & IOT</span>
          </div>
          <div
            style={{
              background: 'rgba(225, 29, 72, 0.15)',
              border: '1px solid rgba(225, 29, 72, 0.4)',
              color: '#f43f5e',
              padding: '8px 20px',
              borderRadius: '999px',
              fontSize: '16px',
              fontWeight: 600,
            }}
          >
            avyantrix.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
