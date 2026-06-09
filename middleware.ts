import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // All supported locales
  locales: ['fr', 'en', 'ar'],

  // Default locale — used when no locale prefix is in the URL
  // e.g., example.com/ → redirects to example.com/fr
  defaultLocale: 'fr',

  // Always show the locale prefix in the URL (cleaner for multilingual SEO)
  localePrefix: 'always',
});

export const config = {
  // Match all paths EXCEPT: API routes, Next.js internals, and static files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};