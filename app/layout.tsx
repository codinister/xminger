import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Footer from '@/components/footer/Footer';
import Nav from '@/components/nav/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Xminger Advertising',
  description: 'Outdoor Advertising company in Ghana',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
