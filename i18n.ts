import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Dynamically import the correct message file based on the active locale
  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});