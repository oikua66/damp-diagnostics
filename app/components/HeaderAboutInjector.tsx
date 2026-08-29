'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const labels: Record<string, string> = {
  en: 'About',
  ru: 'Обо мне',
  uk: 'Про мене',
  sr: 'O meni',
};

export default function HeaderAboutInjector() {
  const pathname = usePathname() || '';

  useEffect(() => {
    const parts = pathname.split('/').filter(Boolean);
    const lang = parts[0] && labels[parts[0]] ? parts[0] : 'en';
    const isDamp = parts.includes('damp-diagnostics');
    if (!isDamp) return;

    const nav = document.querySelector('.site-header nav');
    if (!nav || nav.querySelector('[data-about-injected="true"]')) return;

    const link = document.createElement('a');
    link.href = `/${lang}/about`;
    link.textContent = labels[lang];
    link.setAttribute('data-about-injected', 'true');
    nav.prepend(link);

    return () => {
      link.remove();
    };
  }, [pathname]);

  return null;
}
