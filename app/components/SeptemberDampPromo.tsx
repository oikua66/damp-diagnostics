'use client';

import { useEffect, useState } from 'react';

const END_AT = Date.parse('2026-09-29T22:00:00Z'); // 30 Sep 00:00 Europe/Belgrade (CEST)

const copy: Record<string, { text: string; note: string; action: string }> = {
  ru: {
    text: 'Только в сентябре в Нови-Саде — первичный осмотр проблемы с сыростью бесплатно.',
    note: 'Без лабораторных исследований и инструментальной диагностики.',
    action: 'Оставить контакт и описание проблемы',
  },
  uk: {
    text: 'Лише у вересні в Новому Саді — первинний огляд проблеми з вологістю безкоштовно.',
    note: 'Без лабораторних досліджень та інструментальної діагностики.',
    action: 'Залишити контакт і опис проблеми',
  },
  sr: {
    text: 'Samo u septembru u Novom Sadu — prvi pregled problema sa vlagom je besplatan.',
    note: 'Bez laboratorijskih ispitivanja i instrumentalne dijagnostike.',
    action: 'Ostavite kontakt i opis problema',
  },
  en: {
    text: 'September only in Novi Sad — initial damp inspection is free.',
    note: 'Excludes laboratory testing and instrumental diagnostics.',
    action: 'Leave your contact and problem description',
  },
};

export default function SeptemberDampPromo() {
  const [visible, setVisible] = useState(false);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const segment = window.location.pathname.split('/')[1];
    const currentLang = segment && copy[segment] ? segment : 'en';
    setLang(currentLang);
    setVisible(Date.now() < END_AT);
  }, []);

  if (!visible) return null;
  const t = copy[lang];

  return (
    <div className="september-damp-promo" role="region" aria-label="September offer">
      <div className="september-damp-promo-copy">
        <span>{t.text}</span>
        <small>{t.note}</small>
      </div>
      <a href={`/${lang}#contact`}>{t.action}</a>
    </div>
  );
}
