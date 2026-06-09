import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../globals.css';

// Latin script font — applies to FR and EN
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Arabic script font — applies to AR locale
const cairo = Cairo({
  subsets: ['arabic', 'latin'], // latin needed for numbers
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NIDAM',
  description: 'NIDAM — Digitalization Platform',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Fetches messages for the current locale from our messages/*.json files
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      // Both font variables are available on <html>; CSS rules decide which applies
      className={`${inter.variable} ${cairo.variable}`}
    >
      <body
        className={`
          antialiased
          ${locale === 'ar' ? 'font-arabic' : 'font-sans'}
        `}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}