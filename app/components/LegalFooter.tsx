'use client';

import { usePathname } from 'next/navigation';
import { business } from '../../lib/business';

const supported = new Set(['en', 'ru', 'uk', 'sr']);

const copy = {
  en: {
    attribution: 'Koretskiy Methodology — an authorial methodology by Oleksandr Koretskiy for structured analysis and verification of engineering, technology and business decisions.',
    methodology: 'Methodology',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    legal: 'Legal Notice',
  },
  ru: {
    attribution: 'Koretskiy Methodology — авторская методология Александра Корецкого для структурированного анализа и проверки инженерных, технологических и бизнес-решений.',
    methodology: 'Методология',
    privacy: 'Политика конфиденциальности',
    terms: 'Условия использования',
    legal: 'Правовая информация',
  },
  uk: {
    attribution: 'Koretskiy Methodology — авторська методологія Олександра Корецького для структурованого аналізу та перевірки інженерних, технологічних і бізнес-рішень.',
    methodology: 'Методологія',
    privacy: 'Політика конфіденційності',
    terms: 'Умови використання',
    legal: 'Правова інформація',
  },
  sr: {
    attribution: 'Koretskiy Methodology — autorska metodologija Oleksandra Koretskiy-a za strukturisanu analizu i proveru inženjerskih, tehnoloških i poslovnih odluka.',
    methodology: 'Metodologija',
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
        <a href={`/${lang}/privacy-policy`}>{t.privacy}</a>
        <a href={`/${lang}/terms-of-use`}>{t.terms}</a>
        <a href={`/${lang}/legal-notice`}>{t.legal}</a>
      </div>
    </footer>
  );
}
