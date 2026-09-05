import './globals.css';
import './visuals.css';
import './mobile-menu.css';
import './tender-typography.css';
import './typography-system.css';
import './newsletter.css';
import './projects.css';
import './homepage.css';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ContactDetails from './components/ContactDetails';
import LegalFooter from './components/LegalFooter';
import NewsletterSignup from './components/NewsletterSignup';
import ProjectEstimateCTAInjector from './components/ProjectEstimateCTAInjector';
import { business } from '../lib/business';

export const metadata: Metadata = {
  title: business.operatingName,
  description: 'Independent consulting for complex technical and business decisions.',
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const requestHeaders = await headers();
  const lang = requestHeaders.get('x-site-lang') || 'en';

  return (
    <html lang={lang}>
      <body>
        <ProjectEstimateCTAInjector />
        {children}
        <NewsletterSignup />
        <ContactDetails />
        <LegalFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
