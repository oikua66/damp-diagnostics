import type { Metadata } from 'next';
import '../../../climtec-preview.css';

export const metadata: Metadata = {
  title: 'CLIMTEC — preview | Koretskiy Consulting',
  robots: { index: false, follow: false },
};

export default function ClimtecPreviewLayout({ children }: { children: React.ReactNode }) {
  return children;
}
