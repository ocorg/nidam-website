'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter, type Locale } from '@/lib/navigation';
import { Cairo } from 'next/font/google';

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '600'],
});

const LOCALES: { code: Locale; label: string; isRTL: boolean }[] = [
  { code: 'fr', label: 'FR',      isRTL: false },
  { code: 'en', label: 'EN',      isRTL: false },
  { code: 'ar', label: 'عربية',   isRTL: true  },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  // nextLocale is now typed as Locale ('fr' | 'en' | 'ar'), not string
  function handleSwitch(nextLocale: Locale) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div className="flex items-center gap-1.5 text-sm" dir="ltr">
      {LOCALES.map(({ code, label, isRTL }, index) => (
        <span key={code} className="flex items-center gap-1.5">
          <button
            onClick={() => handleSwitch(code)}
            aria-label={`Switch to ${code.toUpperCase()}`}
            aria-current={locale === code ? 'true' : undefined}
            className={`
              px-1 py-0.5 rounded transition-all duration-200
              ${locale === code
                ? 'text-blue-600 font-semibold scale-105'
                : 'text-gray-400 hover:text-gray-900'}
              ${isRTL ? cairo.className : 'font-medium tracking-wide'}
            `}
          >
            {label}
          </button>

          {index < LOCALES.length - 1 && (
            <span aria-hidden="true" className="text-gray-300 select-none">|</span>
          )}
        </span>
      ))}
    </div>
  );
}