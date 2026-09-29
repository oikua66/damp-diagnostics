'use client';

import { usePathname } from 'next/navigation';
import { business } from '../../lib/business';

const supported = new Set(['en', 'ru', 'uk', 'sr']);

const copy = {
  en: {
    attribution: 'Methodology © Oleksandr Koretskiy',
    methodology: 'Methodology',
    consultation: 'Individual consultation',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    legal: 'Legal Notice',
  },
  ru: {
    attribution: 'Methodology © Oleksandr Koretskiy',
    methodology: 'Методология',
    consultation: 'Индивидуальная консультация',
    privacy: 'Политика конфиденциальности',
    terms: 'Условия использования',
    legal: 'Правовая информация',
  },
  uk: {
    attribution: 'Methodology © Oleksandr Koretskiy',
    methodology: 'Методологія',
    consultation: 'Індивідуальна консультація',
    privacy: 'Політика конфіденційності',
    terms: 'Умови використання',
    legal: 'Правова інформація',
  },
  sr: {
    attribution: 'Methodology © Oleksandr Koretskiy',
    methodology: 'Metodologija',
    consultation: 'Individualna konsultacija',
    privacy: 'Politika privatnosti',
    terms: 'Uslovi korišćenja',
    legal: 'Pravne informacije',
  },
};

export default function LegalFooter() {
  const pathname = usePathname() || '/en';
  const first = pathname.split('/').filter(Boolean)[0];
  const lang = (supported.has(first) ? first : 'en') as keyof typeof copy;
  const t = copy[lang];

  return (
    <footer className="legal-footer">
      <div>
        <span>© 2026 {business.operatingName}</span>
        <p className="methodology-attribution">{t.attribution}</p>
      </div>
      <div className="legal-footer-links">
        <a href={`/${lang}/methodology`}>{t.methodology}</a>
        <a href="https://checkopp.com/individual-consultation">{t.consultation}</a>
        <a href={`/${lang}/privacy-policy`}>{t.privacy}</a>
        <a href={`/${lang}/terms-of-use`}>{t.terms}</a>
        <a href={`/${lang}/legal-notice`}>{t.legal}</a>
      </div>
    </footer>
  );
}
