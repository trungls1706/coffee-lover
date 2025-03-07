import type { Metadata } from 'next';
import { Geist, Geist_Mono, Indie_Flower } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const indieFlower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-indie-flower',
});

export const metadata: Metadata = {
  title: 'Việt Phê',
  description: 'A collection of beautiful coffee images',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${indieFlower.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
