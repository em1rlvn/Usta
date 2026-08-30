import type { Metadata } from 'next';
import { Oswald, Manrope } from 'next/font/google';
import './globals.css';

const oswald = Oswald({ variable: '--font-display', subsets: ['cyrillic', 'latin'] });
const manrope = Manrope({ variable: '--font-body', subsets: ['cyrillic', 'latin'] });

export const metadata: Metadata = {
  title: 'Usta Turkish Restaurant — турецкая кухня в Бишкеке',
  description: 'Usta Turkish Restaurant — вкус Турции, блюда на огне и восточное гостеприимство с 2008 года.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${oswald.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
