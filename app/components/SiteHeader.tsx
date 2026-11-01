import { languageNames, languages, type Lang } from '../../lib/translations';
import MobileMenu, { type NavLink } from './MobileMenu';
import { business } from '../../lib/business';

type NavCopy = {
  about: string;
  services: string;
  methodology: string;
  tenders: string;
  ventures: string;
  perspectives: string;
  contact: string;
};

const labels: Record<Lang, NavCopy> = {
  en: { about: 'About', services: 'Key services', methodology: 'Methodology', tenders: 'Tenders & equipment', ventures: 'Ventures', perspectives: 'Projects for implementation', contact: 'Contact' },
  ru: { about: 'Обо мне', services: 'Ключевые услуги', methodology: 'Методология', tenders: 'Тендеры и оборудование', ventures: 'Ventures', perspectives: 'Проекты для реализации', contact: 'Контакты' },
  uk: { about: 'Про мене', services: 'Ключові послуги', methodology: 'Методологія', tenders: 'Тендери та обладнання', ventures: 'Ventures', perspectives: 'Проєкти для реалізації', contact: 'Контакти' },
  sr: { about: 'O meni', services: 'Ključne usluge', methodology: 'Metodologija', tenders: 'Tenderi i oprema', ventures: 'Ventures', perspectives: 'Projekti za realizaciju', contact: 'Kontakt' },
};

const ventureCta: Record<Lang, string> = {
  en: 'Venture Builder / Portfolio',
  ru: 'Venture Builder / Портфолио',
  uk: 'Venture Builder / Портфоліо',
  sr: 'Venture Builder / Portfolio',
};

export default function SiteHeader({ lang, languagePath }: { lang: Lang; languagePath: string }) {
  const t = labels[lang];
  const links: NavLink[] = [
    { href: `/${lang}/about`, label: t.about },
    { href: `/${lang}#services`, label: t.services },
    { href: `/${lang}/methodology`, label: t.methodology },
    { href: `/${lang}/tender-equipment`, label: t.tenders },
    { href: `/${lang}/ventures`, label: t.ventures },
    { href: `/${lang}/perspectives`, label: t.perspectives },
    { href: `/${lang}#contact`, label: t.contact },
  ];
  const isHome = languagePath === '';

  return (
    <>
      <header className="site-header">
        <a className="brand" href={`/${lang}`} aria-label={`${business.operatingName} home`}>
          <img
            src="/logo.svg"
            alt={business.operatingName}
            style={{ width: 'clamp(118px, 11vw, 150px)', height: 'auto', display: 'block' }}
          />
        </a>
        <div className="header-right">
          <nav>
            {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          </nav>
          <div className="language-switcher" aria-label="Language selector">
            {languages.map((code) => (
              <a key={code} href={`/${code}${languagePath}`} className={code === lang ? 'active' : ''}>{languageNames[code]}</a>
            ))}
          </div>
        </div>
      </header>
      <MobileMenu lang={lang} links={links} />
      {isHome && (
        <div style={{ maxWidth: '1180px', margin: '18px auto 0', padding: '0 28px' }}>
          <a className="button button-dark" href={`/${lang}/ventures`}>{ventureCta[lang]}</a>
        </div>
      )}
    </>
  );
}
