'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';

const labels = {
  en: {
    button: 'Leave your contact',
    intro: 'Leave your phone, email or messenger contact and we will get back to you.',
    name: 'Name (optional)',
    contact: 'Phone, email or messenger',
    comment: 'Short comment (optional)',
    send: 'Send contact',
    close: 'Close',
    required: 'Please enter a contact method.',
    message: 'Hello. I would like to discuss damp / mould diagnostics.',
  },
  ru: {
    button: 'Оставить контакт',
    intro: 'Оставьте телефон, email или контакт в мессенджере — мы свяжемся с вами.',
    name: 'Имя (необязательно)',
    contact: 'Телефон, email или мессенджер',
    comment: 'Короткий комментарий (необязательно)',
    send: 'Отправить контакт',
    close: 'Закрыть',
    required: 'Укажите, пожалуйста, как с вами связаться.',
    message: 'Здравствуйте. Хочу обсудить диагностику сырости / плесени.',
  },
  uk: {
    button: 'Залишити контакт',
    intro: 'Залиште телефон, email або контакт у месенджері — ми зв’яжемося з вами.',
    name: 'Ім’я (необов’язково)',
    contact: 'Телефон, email або месенджер',
    comment: 'Короткий коментар (необов’язково)',
    send: 'Надіслати контакт',
    close: 'Закрити',
    required: 'Вкажіть, будь ласка, як з вами зв’язатися.',
    message: 'Вітаю. Хочу обговорити діагностику вологи / плісняви.',
  },
  sr: {
    button: 'Ostavite kontakt',
    intro: 'Ostavite telefon, email ili kontakt u aplikaciji za poruke — javićemo vam se.',
    name: 'Ime (nije obavezno)',
    contact: 'Telefon, email ili messenger',
    comment: 'Kratak komentar (nije obavezno)',
    send: 'Pošaljite kontakt',
    close: 'Zatvori',
    required: 'Unesite način na koji možemo da vas kontaktiramo.',
    message: 'Zdravo. Želeo/la bih da razgovaramo o dijagnostici vlage / buđi.',
  },
} as const;

type Lang = keyof typeof labels;

export default function DampLeadFormInjector() {
  const pathname = usePathname();
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const lang = useMemo<Lang>(() => {
    const code = pathname.split('/')[1] as Lang;
    return code in labels ? code : 'en';
  }, [pathname]);

  useEffect(() => {
    if (!pathname.includes('/damp-diagnostics')) {
      setMountNode(null);
      return;
    }

    let cancelled = false;
    let attempts = 0;

    const findTarget = () => {
      const target = document.querySelector('.online-cta') as HTMLElement | null;
      if (target) {
        let node = target.querySelector('[data-damp-lead-form]') as HTMLElement | null;
        if (!node) {
          node = document.createElement('div');
          node.dataset.dampLeadForm = 'true';
          target.prepend(node);
        }
        if (!cancelled) setMountNode(node);
        return;
      }
      attempts += 1;
      if (!cancelled && attempts < 20) window.setTimeout(findTarget, 100);
    };

    findTarget();
    return () => { cancelled = true; };
  }, [pathname]);

  const t = labels[lang];

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!contact.trim()) {
      setError(t.required);
      return;
    }
    setError('');

    const body = [
      t.message,
      name.trim() ? `Name: ${name.trim()}` : '',
      `Contact: ${contact.trim()}`,
      comment.trim() ? `Comment: ${comment.trim()}` : '',
      `Page: https://koretskiy.com${pathname}`,
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/381638421005?text=${encodeURIComponent(body)}`, '_blank', 'noopener,noreferrer');
  }

  if (!mountNode) return null;

  return createPortal(
    <div className="damp-lead-form">
      {!open ? (
        <button className="button button-dark damp-lead-button" type="button" onClick={() => setOpen(true)}>
          {t.button}
        </button>
      ) : (
        <form className="damp-lead-fields" onSubmit={submit}>
          <p className="damp-lead-intro">{t.intro}</p>
          <label>
            <span>{t.name}</span>
            <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
          </label>
          <label>
            <span>{t.contact}</span>
            <input value={contact} onChange={(e) => setContact(e.target.value)} autoComplete="tel" required />
          </label>
          <label>
            <span>{t.comment}</span>
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} rows={3} />
          </label>
          {error ? <p className="damp-lead-error">{error}</p> : null}
          <div className="damp-lead-actions">
            <button className="button button-dark" type="submit">{t.send}</button>
            <button className="button button-light" type="button" onClick={() => setOpen(false)}>{t.close}</button>
          </div>
        </form>
      )}
    </div>,
    mountNode,
  );
}
