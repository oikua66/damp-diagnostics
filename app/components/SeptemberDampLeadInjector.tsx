'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import SeptemberDampLeadForm from './SeptemberDampLeadForm';

const END_AT = Date.parse('2026-09-29T22:00:00Z');

export default function SeptemberDampLeadInjector() {
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (Date.now() >= END_AT) return;
    const segment = window.location.pathname.split('/')[1];
    setLang(['en', 'ru', 'uk', 'sr'].includes(segment) ? segment : 'en');
    setTarget(document.getElementById('contact'));
  }, []);

  if (!target) return null;
  return createPortal(<SeptemberDampLeadForm lang={lang} />, target);
}
