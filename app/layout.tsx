import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Load the Inter font
const inter = Inter({ subsets: ['latin'] });

// Define metadata for the application
export const metadata: Metadata = {
  title: 'AI Vocal Remover',
  description: 'Separate vocals from instrumental tracks using AI.',
  keywords: ['AI', 'vocal remover', 'audio processing', 'machine learning'],
  authors: [{ name: 'Your Name', url: 'https://yourwebsite.com' }],
  openGraph: {
    title: 'AI Vocal Remover',
    description: 'Separate vocals from instrumental tracks using AI.',
    url: 'https://aivocalremover.com',
    siteName: 'AI Vocal Remover',
    images: [
      {
        url: 'https://aivocalremover.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Vocal Remover',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Vocal Remover',
    description: 'Separate vocals from instrumental tracks using AI.',
    images: ['https://aivocalremover.com/twitter-image.png'],
  },
};

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-text`}>
        <Header />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
