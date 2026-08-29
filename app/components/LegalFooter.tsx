'use client';

import { usePathname } from 'next/navigation';

const supported = new Set(['en', 'ru', 'uk', 'sr']);

export default function LegalFooter() {
  const pathname = usePathname() || '/en';
  const first = pathname.split('/').filter(Boolean)[0];
  const lang = supported.has(first) ? first : 'en';

  return (
    <footer className="legal-footer">
      <span>© 2026 Koretskiy Consulting</span>
      <div className="legal-footer-links">
        <a href={`/${lang}/privacy-policy`}>Privacy Policy</a>
        <a href={`/${lang}/terms-of-use`}>Terms of Use</a>
        <a href={`/${lang}/legal-notice`}>Legal Notice</a>
      </div>
    </footer>
  );
}
