'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

type NavLink = { href: string; label: string };

const menuLabels: Record<string, string> = {
  en: 'Menu',
  ru: 'Меню',
  uk: 'Меню',
  sr: 'Meni',
};

const closeLabels: Record<string, string> = {
  en: 'Close',
  ru: 'Закрыть',
  uk: 'Закрити',
  sr: 'Zatvori',
};

export default function MobileMenu() {
  const pathname = usePathname() || '/en';
  const lang = pathname.split('/').filter(Boolean)[0] || 'en';
  const [open, setOpen] = useState(false);
  const [links, setLinks] = useState<NavLink[]>([]);

  useEffect(() => {
    const collectLinks = () => {
      const nav = document.querySelector('.site-header nav');
      if (!nav) return;

      const items = Array.from(nav.querySelectorAll('a'))
        .map((a) => ({
          href: a.getAttribute('href') || '#',
          label: (a.textContent || '').trim(),
        }))
        .filter((item) => item.label);

      setLinks(items);
    };

    collectLinks();
    const timer = window.setTimeout(collectLinks, 100);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
        <span>{menuLabels[lang] || menuLabels.en}</span>
      </button>

      {open && (
        <div className="mobile-menu-overlay" id="mobile-site-menu" role="dialog" aria-modal="true">
          <div className="mobile-menu-panel">
            <div className="mobile-menu-top">
              <span className="mobile-menu-title">Koretskiy Consulting</span>
              <button type="button" className="mobile-menu-close" onClick={() => setOpen(false)}>
                {closeLabels[lang] || closeLabels.en} ×
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
