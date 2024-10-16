import localFont from 'next/font/local';
import { PropsWithChildren } from 'react';

import '@/styles/globals.css';

const poppins = localFont({
  src: '../../public/fonts/Poppins.woff',
  variable: '--font-poppins',
  weight: '300 400 500 600',
});

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
