'use client';

import { FormEvent, useState } from 'react';

const labels: Record<string, { name: string; phone: string; problem: string; button: string }> = {
  ru: { name: 'Имя', phone: 'Телефон', problem: 'Коротко опишите проблему', button: 'Отправить' },
  uk: { name: 'Ім’я', phone: 'Телефон', problem: 'Коротко опишіть проблему', button: 'Надіслати' },
  sr: { name: 'Ime', phone: 'Telefon', problem: 'Ukratko opišite problem', button: 'Pošalji' },
  en: { name: 'Name', phone: 'Phone', problem: 'Briefly describe the problem', button: 'Send' },
};

export default function SeptemberDampLeadForm({ lang }: { lang: string }) {
  const t = labels[lang] || labels.en;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [problem, setProblem] = useState('');

  function submit(e: FormEvent) {
    e.preventDefault();
    const text = [
      'September damp inspection — Novi Sad',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Problem: ${problem}`,
    ].join('\n');
    window.open(`https://wa.me/381638421005?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <form className="september-damp-form" onSubmit={submit}>
      <label>
        <span>{t.name}</span>
        <input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
      </label>
      <label>
        <span>{t.phone}</span>
        <input required value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" inputMode="tel" />
      </label>
      <label className="september-damp-form-wide">
        <span>{t.problem}</span>
        <textarea required rows={4} value={problem} onChange={(e) => setProblem(e.target.value)} />
      </label>
      <button className="button button-dark" type="submit">{t.button}</button>
    </form>
  );
}
