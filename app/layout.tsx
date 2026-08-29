import './globals.css';
import './visuals.css';
import type { Metadata } from 'next';
import ContactDetails from './components/ContactDetails';
import LegalFooter from './components/LegalFooter';
import HeaderAboutInjector from './components/HeaderAboutInjector';

export const metadata: Metadata = {
  title: 'Koretskiy Consulting',
  description: 'Independent consulting for complex technical and business decisions.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <HeaderAboutInjector />
        {children}
        <ContactDetails />
        <LegalFooter />
      </body>
    </html>
  );
}
