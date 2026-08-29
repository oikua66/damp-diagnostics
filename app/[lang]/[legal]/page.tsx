import { notFound } from 'next/navigation';
import { languages, type Lang } from '../../../lib/translations';

type Props = { params: Promise<{ lang: string; legal: string }> };

const legalPages = ['privacy-policy', 'terms-of-use', 'legal-notice'] as const;
type LegalPage = (typeof legalPages)[number];

export function generateStaticParams() {
  return languages.flatMap((lang) => legalPages.map((legal) => ({ lang, legal })));
}

const privacy = {
  title: 'Privacy Policy',
  updated: 'Last updated: July 28, 2026',
  sections: [
    ['1. Introduction', [
      'Koretskiy Consulting ("we", "our", or "us") respects your privacy and is committed to protecting any personal information you choose to share with us.',
      'This Privacy Policy explains what information may be collected when you use this website and how that information is handled.',
    ]],
    ['2. Information We Collect', [
      'We do not require visitors to register or create an account.',
      'We may receive personal information only if you voluntarily contact us by email, telephone, WhatsApp, Telegram, or any other communication channel listed on this website.',
      'Such information may include your name, email address, telephone number, and information you choose to include in your message.',
    ]],
    ['3. How We Use Your Information', [
      'Any information you provide may be used solely to respond to your inquiry, communicate regarding consulting services, and fulfill legal obligations where applicable.',
      'We do not sell, rent, or share your personal information for marketing purposes.',
    ]],
    ['4. Cookies', [
      'This website does not use analytics, advertising, or visitor tracking tools configured by Koretskiy Consulting.',
      'The website platform and your web browser may use technical cookies necessary for the site’s operation.',
    ]],
    ['5. Third-Party Services', [
      'This website may contain links to third-party websites or communication platforms, including email, WhatsApp, Telegram, and LinkedIn.',
      'We are not responsible for the privacy practices or content of those third-party services.',
    ]],
    ['6. Data Security', [
      'We take reasonable measures to protect information voluntarily provided to us.',
      'However, no method of transmission over the Internet can be guaranteed to be completely secure.',
    ]],
    ['7. Your Rights', [
      'Depending on your country of residence, you may have the right to request access to, correction of, or deletion of your personal information, and to object to processing where applicable.',
      'To exercise these rights, please contact us using the contact details provided on this website.',
    ]],
    ['8. Changes to This Policy', [
      'We may update this Privacy Policy from time to time. The latest version will always be available on this page.',
    ]],
    ['9. Contact', [
      'Koretskiy Consulting',
      'Email: consulting@koretskiy.com',
      'Website: https://koretskiy.com',
    ]],
  ],
};

const terms = {
  title: 'Terms of Use',
  sections: [
    ['1. Acceptance of These Terms', ['By accessing or using this website, you agree to these Terms of Use. If you do not agree with these Terms, please discontinue using this website.']],
    ['2. Purpose of This Website', [
      'This website is provided for general informational purposes only.',
      'Its purpose is to present Koretskiy Consulting, its expertise, and the consulting services it offers.',
      'The content of this website is intended solely for general information and should not be considered professional advice applicable to any specific situation.',
    ]],
    ['3. No Client Relationship', [
      'Using this website or contacting Koretskiy Consulting does not create a client relationship.',
      'A professional relationship is established only after both parties have expressly agreed to cooperate.',
    ]],
    ['4. Information Disclaimer', [
      'The information published on this website is provided in good faith.',
      'While every reasonable effort is made to keep the information accurate and up to date, Koretskiy Consulting makes no representations or warranties, express or implied, regarding the completeness, accuracy, reliability, or suitability of the information for any particular purpose.',
    ]],
    ['5. Intellectual Property', [
      'Unless otherwise stated, all content on this website, including text, graphics, images, logos, and other materials, is the intellectual property of Koretskiy Consulting and is protected by applicable copyright and intellectual property laws.',
      'No content may be copied, reproduced, distributed, modified, published, or used for commercial purposes without prior written permission.',
    ]],
    ['6. Third-Party Links', [
      'This website may contain links to third-party websites or services for your convenience.',
      'Koretskiy Consulting has no control over, and assumes no responsibility for, the content, availability, security, or privacy practices of any third-party websites or services.',
    ]],
    ['7. Limitation of Liability', ['To the fullest extent permitted by applicable law, Koretskiy Consulting shall not be liable for any direct, indirect, incidental, consequential, or other damages arising from or related to the use of this website or reliance on its content.']],
    ['8. Changes to These Terms', ['Koretskiy Consulting reserves the right to modify these Terms of Use at any time. The most current version will always be published on this page.']],
    ['9. Governing Law', ['These Terms of Use shall be governed by and interpreted in accordance with the laws of the Republic of Serbia.']],
    ['10. Contact', ['Koretskiy Consulting', 'Email: consulting@koretskiy.com', 'Website: https://koretskiy.com']],
  ],
};

const notice = {
  title: 'Legal Notice',
  sections: [
    ['Company Information', [
      'Business Name: OLEKSANDR KORETSKIY PR AGENCIJA ZA TEHNIČKI KONSALTING FUTOG',
      'Operating Name: Koretskiy Consulting',
      'Owner: Oleksandr Koretskiy',
      'Principal Business Activity: Engineering Activities and Technical Consulting (Activity Code 7112)',
    ]],
    ['Registration Details', [
      'Registered in the Republic of Serbia',
      'Registration Number (APR): 68055407',
      'Tax Identification Number (PIB): 115052587',
    ]],
    ['Location', ['Futog', 'Novi Sad', 'Republic of Serbia']],
    ['Contact', ['Email: consulting@koretskiy.com', 'Phone: +381 63 842 1005', 'Website: https://koretskiy.com']],
    ['Legal Jurisdiction', ['This website is operated from the Republic of Serbia and is governed by the applicable laws of the Republic of Serbia.']],
  ],
};

const docs: Record<LegalPage, typeof terms & { updated?: string }> = {
  'privacy-policy': privacy,
  'terms-of-use': terms,
  'legal-notice': notice,
};

export default async function LegalPage({ params }: Props) {
  const { lang: rawLang, legal: rawLegal } = await params;
  if (!languages.includes(rawLang as Lang) || !legalPages.includes(rawLegal as LegalPage)) notFound();
  const lang = rawLang as Lang;
  const doc = docs[rawLegal as LegalPage];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href={`/${lang}`} aria-label="Koretskiy Consulting home">
          <span className="brand-mark">KC</span>
          <span>Koretskiy Consulting</span>
        </a>
        <a className="button button-light" href={`/${lang}`}>Back to site</a>
      </header>

      <article className="legal-page">
        <p className="eyebrow">Koretskiy Consulting</p>
        <h1>{doc.title}</h1>
        {doc.updated && <p className="legal-updated">{doc.updated}</p>}
        <div className="legal-content">
          {doc.sections.map(([heading, paragraphs]) => (
            <section key={String(heading)}>
              <h3>{String(heading)}</h3>
              {(paragraphs as string[]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
