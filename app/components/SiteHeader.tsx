import { languageNames, languages, type Lang } from '../../lib/translations';

const labels: Record<Lang, { about: string; services: string; approach: string; damp: string; contact: string }> = {
  en: { about: 'About', services: 'Services', approach: 'Approach', damp: 'Damp diagnostics', contact: 'Contact' },
  ru: { about: 'Обо мне', services: 'Услуги', approach: 'Подход', damp: 'Диагностика сырости', contact: 'Контакты' },
  uk: { about: 'Про мене', services: 'Послуги', approach: 'Підхід', damp: 'Діагностика вологи', contact: 'Контакти' },
  sr: { about: 'O meni', services: 'Usluge', approach: 'Pristup', damp: 'Dijagnostika vlage', contact: 'Kontakt' },
};

export default function SiteHeader({ lang }: { lang: Lang }) {
  const t = labels[lang];
  return (
    <header className="site-header">
      <a className="brand" href={`/${lang}`} aria-label="Koretskiy Consulting home">
        <img
          src="/logo.svg"
          alt="Koretskiy Consulting"
          style={{ width: 'clamp(118px, 11vw, 150px)', height: 'auto', display: 'block' }}
        />
      </a>
      <div className="header-right">
        <nav>
          <a href={`/${lang}/about`}>{t.about}</a>
          <a href={`/${lang}#services`}>{t.services}</a>
          <a href={`/${lang}#approach`}>{t.approach}</a>
          <a href={`/${lang}/damp-diagnostics`}>{t.damp}</a>
          <a href={`/${lang}#contact`}>{t.contact}</a>
        </nav>
        <div className="language-switcher" aria-label="Language selector">
          {languages.map((code) => (
            <a key={code} href={`/${code}`} className={code === lang ? 'active' : ''}>{languageNames[code]}</a>
          ))}
        </div>
      </div>
    </header>
  );
}
