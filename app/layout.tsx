import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NavigationBar } from '@/components/navigation/NavigationBar';
import { HeaderTop } from '@/components/navigation/HeaderTop';
import { SecondaryNav } from '@/components/navigation/SecondaryNav';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Consulat Général du Gabon en France - Services Consulaires',
  description: 'Site officiel du Consulat Général du Gabon en France. Services consulaires, état civil, protection consulaire, et accompagnement de la diaspora gabonaise.',
  keywords: 'Consulat Gabon France, services consulaires, état civil, protection consulaire, diaspora gabonaise, Paris',
  authors: [{ name: 'OKA Tech' }],
  creator: 'OKA Tech',
  publisher: 'Consulat Général du Gabon en France',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Consulat Général du Gabon en France',
    description: 'Services consulaires et accompagnement de la diaspora gabonaise',
    url: 'https://consulatdugabon.fr',
    siteName: 'Consulat du Gabon',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consulat Général du Gabon en France',
    description: 'Services consulaires et accompagnement de la diaspora gabonaise',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#003F7F" />
        <meta name="msapplication-TileColor" content="#003F7F" />
      </head>
      <body className={inter.className}>
        <HeaderTop />
        <NavigationBar />
        <SecondaryNav />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}