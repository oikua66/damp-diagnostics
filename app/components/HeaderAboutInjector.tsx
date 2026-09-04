'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

type NavCopy = {
  about: string;
  services: string;
  methodology: string;
  tenders: string;
  perspectives: string;
  contact: string;
};

const labels: Record<string, NavCopy> = {
  en: {
    about: 'About',
    services: 'Key services',
    methodology: 'Methodology',
    tenders: 'Tenders & equipment',
    perspectives: 'Projects for implementation',
    contact: 'Contact',
  },
  ru: {
    about: 'Обо мне',
    services: 'Ключевые услуги',
    methodology: 'Методология',
    tenders: 'Тендеры и оборудование',
    perspectives: 'Проекты для реализации',
    contact: 'Контакты',
  },
  uk: {
    about: 'Про мене',
    services: 'Ключові послуги',
    methodology: 'Методологія',
    tenders: 'Тендери та обладнання',
    perspectives: 'Проєкти для реалізації',
    contact: 'Контакти',
  },
  sr: {
    about: 'O meni',
    services: 'Ključne usluge',
    methodology: 'Metodologija',
    tenders: 'Tenderi i oprema',
    perspectives: 'Projekti za realizaciju',
    contact: 'Kontakt',
  },
};

export default function HeaderAboutInjector() {
  const pathname = usePathname() || '';

  useEffect(() => {
    const parts = pathname.split('/').filter(Boolean);
    const lang = parts[0] && labels[parts[0]] ? parts[0] : 'en';
    const copy = labels[lang];

    const header = document.querySelector<HTMLElement>('.site-header');
    const headerRight = header?.querySelector<HTMLElement>('.header-right');
    if (!header || !headerRight) return;

    const brand = header.querySelector<HTMLAnchorElement>('.brand');
    if (brand) {
      brand.href = `/${lang}`;
      brand.setAttribute('aria-label', 'Koretskiy Consulting home');
      brand.innerHTML = '';

      const logo = document.createElement('img');
      logo.src = '/logo.svg';
      logo.alt = 'Koretskiy Consulting';
      logo.style.width = 'clamp(118px, 11vw, 150px)';
      logo.style.height = 'auto';
      logo.style.display = 'block';
      brand.appendChild(logo);
    }

    Array.from(headerRight.children).forEach((child) => {
      if (child.matches('a')) child.remove();
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
      { href: `/${lang}/tender-equipment`, label: copy.tenders },
      { href: `/${lang}/perspectives`, label: copy.perspectives },
      { href: `/${lang}#contact`, label: copy.contact },
    ];

    nav.innerHTML = '';
    links.forEach(({ href, label }) => {
      const link = document.createElement('a');
      link.href = href;
      link.textContent = label;
      nav?.appendChild(link);
    });
  }, [pathname]);

  return null;
}
