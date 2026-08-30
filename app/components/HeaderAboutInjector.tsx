'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

type NavCopy = {
  about: string;
  services: string;
  methodology: string;
  damp: string;
  contact: string;
  back: string;
};

const labels: Record<string, NavCopy> = {
  en: {
    about: 'About',
    services: 'Key services',
    methodology: 'Methodology',
    damp: 'Damp diagnostics',
    contact: 'Contact',
    back: 'Back to main page',
  },
  ru: {
    about: 'Обо мне',
    services: 'Ключевые услуги',
    methodology: 'Методология',
    damp: 'Диагностика сырости',
    contact: 'Контакты',
    back: 'Вернуться на главную',
  },
  uk: {
    about: 'Про мене',
    services: 'Ключові послуги',
    methodology: 'Методологія',
    damp: 'Діагностика вологи',
    contact: 'Контакти',
    back: 'Повернутися на головну',
  },
  sr: {
    about: 'O meni',
    services: 'Ključne usluge',
    methodology: 'Metodologija',
    damp: 'Dijagnostika vlage',
    contact: 'Kontakt',
    back: 'Nazad na početnu',
  },
};

export default function HeaderAboutInjector() {
  const pathname = usePathname() || '';

  useEffect(() => {
    const parts = pathname.split('/').filter(Boolean);
    const lang = parts[0] && labels[parts[0]] ? parts[0] : 'en';
    const copy = labels[lang];
    const isDamp = parts.includes('damp-diagnostics');

    const header = document.querySelector<HTMLElement>('.site-header');
    const headerRight = header?.querySelector<HTMLElement>('.header-right');
    if (!header || !headerRight) return;

    Array.from(headerRight.children).forEach((child) => {
      if (child.matches('a') && !child.classList.contains('header-home-button')) child.remove();
    });

    let nav = headerRight.querySelector<HTMLElement>('nav');
    if (!nav) {
      nav = document.createElement('nav');
      const languageSwitcher = headerRight.querySelector('.language-switcher');
      headerRight.insertBefore(nav, languageSwitcher || null);
    }

    const links = [
      { href: `/${lang}/about`, label: copy.about },
      { href: `/${lang}#services`, label: copy.services },
      { href: `/${lang}#approach`, label: copy.methodology },
      { href: `/${lang}/damp-diagnostics`, label: copy.damp },
      { href: `/${lang}#contact`, label: copy.contact },
    ];

    nav.innerHTML = '';
    links.forEach(({ href, label }) => {
      const link = document.createElement('a');
      link.href = href;
      link.textContent = label;
      nav?.appendChild(link);
    });

    const oldBack = headerRight.querySelector('.header-home-button');
    if (oldBack) oldBack.remove();

    if (isDamp) {
      const back = document.createElement('a');
      back.href = `/${lang}`;
      back.className = 'header-home-button';
      back.textContent = `← ${copy.back}`;
      headerRight.insertBefore(back, nav);
    }
  }, [pathname]);

  return null;
}
