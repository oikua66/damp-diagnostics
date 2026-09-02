import './globals.css';
import './visuals.css';
import './mobile-menu.css';
import './header-nav.css';
import './tender-typography.css';
import './typography-system.css';
import './september-promo.css';
import './newsletter.css';
import './projects.css';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ContactDetails from './components/ContactDetails';
import LegalFooter from './components/LegalFooter';
import HeaderAboutInjector from './components/HeaderAboutInjector';
import MobileMenu from './components/MobileMenu';
import SeptemberDampPromo from './components/SeptemberDampPromo';
import SeptemberDampLeadInjector from './components/SeptemberDampLeadInjector';
import NewsletterSignup from './components/NewsletterSignup';
import ProjectEstimateCTAInjector from './components/ProjectEstimateCTAInjector';

export const metadata: Metadata = {
  title: 'Koretskiy Consulting',
  description: 'Independent consulting for complex technical and business decisions.',
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const requestHeaders = await headers();
  const lang = requestHeaders.get('x-site-lang') || 'en';

  return (
    <html lang={lang}>
      <body>
        <SeptemberDampPromo />
        <HeaderAboutInjector />
        <MobileMenu />
        <ProjectEstimateCTAInjector />
        {children}
        <SeptemberDampLeadInjector />
        <NewsletterSignup />
        <ContactDetails />
        <LegalFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
