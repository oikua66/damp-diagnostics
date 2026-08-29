import fs from 'node:fs';
import path from 'node:path';

const files: Record<string, string> = {
  about: 'about.webp.b64',
  'damp-hero': 'damp-hero.webp.b64',
};

export async function GET(_request: Request, { params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const file = files[name];
  if (!file) return new Response('Not found', { status: 404 });

  const source = path.join(process.cwd(), 'public', 'images', file);
  const base64 = fs.readFileSync(source, 'utf8').trim();
  const image = Buffer.from(base64, 'base64');

  return new Response(image, {
    headers: {
      'Content-Type': 'image/webp',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
