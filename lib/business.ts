export const business = {
  operatingName: 'Koretskiy Consulting',
  registeredSerbianName: 'OLEKSANDR KORETSKIY PR AGENCIJA ZA TEHNIČKI KONSALTING FUTOG',
  founder: {
    canonicalName: 'Oleksandr Koretskiy',
  },
  email: 'consulting@koretskiy.com',
  phone: {
    e164: '+381638421005',
    display: '+381 63 842 1005',
    href: 'tel:+381638421005',
  },
  website: {
    canonicalUrl: 'https://koretskiy.com',
    domain: 'koretskiy.com',
    contactUrl: 'https://www.koretskiy.com',
    contactDisplay: 'www.koretskiy.com',
  },
  messagingChannelLabels: ['WhatsApp', 'Viber', 'Telegram'],
} as const;

export function mailtoHref() {
  return `mailto:${business.email}`;
}

export function mailtoHrefWithSubject(subject: string) {
  return `${mailtoHref()}?subject=${encodeURIComponent(subject)}`;
}
