'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const labels: Record<string, string> = {
  en: 'Send project data for a preliminary estimate',
  ru: 'Отправить данные для предварительной оценки',
  uk: 'Надіслати дані для попередньої оцінки',
  sr: 'Pošaljite podatke za preliminarnu procenu',
};

export default function ProjectEstimateCTAInjector() {
  const pathname = usePathname() || '';

  useEffect(() => {
    const parts = pathname.split('/').filter(Boolean);
    const lang = labels[parts[0]] ? parts[0] : 'en';
    if (!parts.includes('perspectives')) return;

    const cards = Array.from(document.querySelectorAll<HTMLElement>('.cards .card'));
    const projectCard = cards[1];
    if (!projectCard) return;

    const oldButton = projectCard.querySelector<HTMLElement>('.button');
    if (!oldButton) return;

    const link = document.createElement('a');
    link.className = oldButton.className;
    link.href = `/${lang}#contact`;
    link.textContent = labels[lang];
    link.removeAttribute('aria-disabled');
    link.style.opacity = '1';
    link.style.cursor = 'pointer';

    oldButton.replaceWith(link);
  }, [pathname]);

  return null;
}
