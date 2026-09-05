'use client';

import { useEffect, useState } from 'react';
import type { Lang } from '../../lib/translations';

export type NavLink = { href: string; label: string };

const menuLabels: Record<Lang, string> = {
  en: 'Menu',
  ru: 'Меню',
  uk: 'Меню',
  sr: 'Meni',
};

const closeLabels: Record<Lang, string> = {
  en: 'Close',
  ru: 'Закрыть',
  uk: 'Закрити',
  sr: 'Zatvori',
};

export default function MobileMenu({ lang, links }: { lang: Lang; links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        className="mobile-menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-site-menu"
        onClick={() => setOpen(true)}
      >
        <span aria-hidden="true" className="mobile-menu-icon">☰</span>
        <span>{menuLabels[lang]}</span>
      </button>

      {open && (
        <div className="mobile-menu-overlay" id="mobile-site-menu" role="dialog" aria-modal="true">
          <div className="mobile-menu-panel">
            <div className="mobile-menu-top">
              <span className="mobile-menu-title">Koretskiy Consulting</span>
              <button type="button" className="mobile-menu-close" onClick={() => setOpen(false)}>
                {closeLabels[lang]} ×
              </button>
            </div>

            <nav className="mobile-menu-links" aria-label="Mobile navigation">
              {links.map((item, index) => (
                <a key={`${item.href}-${index}`} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
