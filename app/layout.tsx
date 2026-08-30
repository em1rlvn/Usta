import type { Metadata } from 'next';
import { Oswald, Manrope } from 'next/font/google';
import { I18nProvider } from '@/lib/i18n';
import './globals.css';

const oswald = Oswald({ variable: '--font-display', subsets: ['cyrillic', 'latin'] });
const manrope = Manrope({ variable: '--font-body', subsets: ['cyrillic', 'latin'] });

export const metadata: Metadata = {
  title: 'Usta Turkish Restaurant — турецкая кухня в Бишкеке',
  description: 'Usta Turkish Restaurant — настоящий вкус Востока, блюда на огне и восточное гостеприимство с 2008 года.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${oswald.variable} ${manrope.variable}`}><I18nProvider>{children}</I18nProvider></body>
    </html>
  );
}
