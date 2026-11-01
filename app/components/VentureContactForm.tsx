'use client';

import { useState } from 'react';
import styles from '../ventures.module.css';

export default function VentureContactForm({ ventureId, ventureName, email }: { ventureId: string; ventureName: string; email: string }) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [replyEmail, setReplyEmail] = useState('');
  const [interest, setInterest] = useState('Partnership');
  const [message, setMessage] = useState('');

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = `Discuss ${ventureName} — ${ventureId}`;
    const body = [
      `Venture: ${ventureName}`,
      `Venture ID: ${ventureId}`,
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${replyEmail}`,
      `Interested in: ${interest}`,
      '',
      message,
    ].join('\n');
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <div className={styles.field}><label htmlFor="venture-name">Name</label><input id="venture-name" className={styles.input} value={name} onChange={(e) => setName(e.target.value)} required /></div>
      <div className={styles.field}><label htmlFor="venture-company">Company</label><input id="venture-company" className={styles.input} value={company} onChange={(e) => setCompany(e.target.value)} /></div>
      <div className={`${styles.field} ${styles.full}`}><label htmlFor="venture-email">Email</label><input id="venture-email" type="email" className={styles.input} value={replyEmail} onChange={(e) => setReplyEmail(e.target.value)} required /></div>
      <div className={`${styles.field} ${styles.full}`}><label htmlFor="venture-interest">Interested in</label><select id="venture-interest" className={styles.select} value={interest} onChange={(e) => setInterest(e.target.value)}><option>Partnership</option><option>Licensing</option><option>Acquisition / Transfer</option><option>Investment</option><option>Pilot</option><option>Other</option></select></div>
      <div className={`${styles.field} ${styles.full}`}><label htmlFor="venture-message">Message</label><textarea id="venture-message" className={styles.textarea} value={message} onChange={(e) => setMessage(e.target.value)} required /></div>
      <div className={styles.full}><button className={styles.submit} type="submit">Discuss This Venture</button></div>
    </form>
  );
}
