import './globals.css';
import './visuals.css';
import './mobile-menu.css';
import type { Metadata } from 'next';
import ContactDetails from './components/ContactDetails';
import LegalFooter from './components/LegalFooter';
import HeaderAboutInjector from './components/HeaderAboutInjector';
import MobileMenu from './components/MobileMenu';

export const metadata: Metadata = {
  title: 'Koretskiy Consulting',
  description: 'Independent consulting for complex technical and business decisions.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <HeaderAboutInjector />
        <MobileMenu />
        {children}
        <ContactDetails />
        <LegalFooter />
      </body>
    </html>
  );
}
