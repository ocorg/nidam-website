import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['fr', 'en', 'ar'] as const;
export type Locale = (typeof locales)[number];

// These replace next/navigation's useRouter, usePathname, Link, and redirect
// with locale-aware versions
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });