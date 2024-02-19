import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navibar from './component/shared/Navbar/Navibar';
import Footer from './component/shared/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navibar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
