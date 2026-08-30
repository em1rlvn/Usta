'use client';

import Link from 'next/link';
import { ChevronDown, Languages, Menu, MessageCircle } from 'lucide-react';
import { menuCategories } from '@/lib/menu-data';
import { type Locale, useI18n } from '@/lib/i18n';

const whatsapp = 'https://api.whatsapp.com/send/?phone=996755531212&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21';

export function SiteHeader() {
  const { locale, setLocale, t } = useI18n();
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#120e0d]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10">
        <Link href="/" className="flex items-baseline gap-2" aria-label={t('nav.home')}>
          <span className="font-display text-4xl tracking-[-0.08em] text-[#ff2a1a]">USTA</span>
          <span className="hidden text-[9px] uppercase tracking-[0.25em] text-white/45 sm:block">since 2008</span>
        </Link>

        <nav className="hidden h-full items-center gap-8 text-sm md:flex" aria-label={t('nav.primary')}>
          <div className="group relative flex h-full items-center">
            <Link href="/menu" className="flex items-center gap-1.5 transition hover:text-[#ffb31a]">
              {t('nav.menu')} <ChevronDown className="size-3.5 transition group-hover:rotate-180" />
            </Link>
            <div className="pointer-events-none absolute left-1/2 top-[calc(100%-1px)] w-[620px] -translate-x-1/2 translate-y-2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/12 bg-white/10 p-px shadow-2xl">
                {menuCategories.map((category, index) => (
                  <Link key={category.id} href={`/menu#${category.id}`} className="group/item bg-[#1a1311] p-5 transition hover:bg-[#251916]">
                    <span className="mb-6 block text-[10px] text-[#ffb31a]">0{index + 1}</span>
                    <strong className="font-display block text-2xl uppercase">{t(`category.${category.id}`)}</strong>
                    <span className="mt-1 block text-xs text-white/45">{t(`category.${category.id}Note`)}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/#restaurant" className="transition hover:text-[#ffb31a]">{t('nav.restaurant')}</Link>
          <Link href="/#reviews" className="transition hover:text-[#ffb31a]">{t('nav.reviews')}</Link>
          <Link href="/contacts" className="transition hover:text-[#ffb31a]">{t('nav.contacts')}</Link>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center rounded-full border border-white/12 bg-black/20 p-1 sm:flex" aria-label={t('nav.language')}>
            {(['ru', 'ky', 'tr'] as Locale[]).map((item) => <button key={item} onClick={() => setLocale(item)} className={`rounded-full px-2.5 py-1.5 text-[10px] font-bold uppercase transition ${locale === item ? 'bg-white text-black' : 'text-white/45 hover:text-white'}`} aria-pressed={locale === item}>{item}</button>)}
          </div>
          <a href={whatsapp} className="inline-flex items-center gap-2 rounded-full bg-[#ffb31a] px-4 py-2.5 text-sm font-semibold text-[#1a1007] transition hover:scale-[1.03]" target="_blank" rel="noreferrer">
            <MessageCircle className="size-4" /><span className="hidden lg:inline">{t('nav.whatsapp')}</span>
          </a>
          <details className="group relative md:hidden">
            <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full border border-white/15 bg-white/5" aria-label={t('nav.open')}>
              <Menu className="size-5" />
            </summary>
            <div className="absolute right-0 top-12 w-56 rounded-2xl border border-white/10 bg-[#1a1311] p-3 shadow-2xl">
              <div className="mb-2 flex items-center gap-2 border-b border-white/10 px-3 pb-3"><Languages className="size-4 text-[#ffb31a]" />{(['ru', 'ky', 'tr'] as Locale[]).map((item) => <button key={item} onClick={() => setLocale(item)} className={`rounded-lg px-2 py-1 text-[10px] font-bold uppercase ${locale === item ? 'bg-white text-black' : 'text-white/45'}`}>{item}</button>)}</div>
              <Link href="/menu" className="block rounded-xl px-4 py-3 hover:bg-white/5">{t('nav.menu')}</Link>
              <Link href="/#restaurant" className="block rounded-xl px-4 py-3 hover:bg-white/5">{t('nav.restaurant')}</Link>
              <Link href="/#reviews" className="block rounded-xl px-4 py-3 hover:bg-white/5">{t('nav.reviews')}</Link>
              <Link href="/contacts" className="block rounded-xl px-4 py-3 hover:bg-white/5">{t('nav.contacts')}</Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
