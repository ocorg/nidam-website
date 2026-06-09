import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function HomePage() {
  // useTranslations is ALWAYS called inside the component itself, never inherited
  const t = useTranslations('hero');
  const tNav = useTranslations('nav');

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      <LanguageSwitcher />

      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
        <p className="text-gray-600 text-lg mb-6">{t('subtitle')}</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
            {t('cta_primary')}
          </button>
          <button className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
            {t('cta_secondary')}
          </button>
        </div>
      </div>

      <nav className="flex gap-6 text-sm text-gray-500">
        {(['services', 'projects', 'pricing', 'about', 'contact'] as const).map((key) => (
          <span key={key}>{tNav(key)}</span>
        ))}
      </nav>
    </main>
  );
}