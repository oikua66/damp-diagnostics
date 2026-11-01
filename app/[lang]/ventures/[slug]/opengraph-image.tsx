import { ImageResponse } from 'next/og';
import { getVentureBySlug } from '../../../../lib/ventures';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const venture = getVentureBySlug(slug);
  const title = venture?.name ?? 'Venture Portfolio';
  const tagline = venture?.tagline ?? 'From opportunity to working MVP.';
  const status = venture ? `${venture.stage} · ${venture.status}` : 'Koretskiy Consulting';

  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#f7f7f4', color: '#171717', padding: '72px 80px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24, letterSpacing: '0.08em', textTransform: 'uppercase' }}><span>Koretskiy Consulting</span><span>Venture Portfolio</span></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}><div style={{ fontSize: 76, lineHeight: 1, letterSpacing: '-0.04em', maxWidth: 980 }}>{title}</div><div style={{ fontSize: 30, lineHeight: 1.35, color: '#4a4a44', maxWidth: 970 }}>{tagline}</div></div>
      <div style={{ fontSize: 22, color: '#66665f' }}>{status}</div>
    </div>,
    size,
  );
}
