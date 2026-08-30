'use client';

import { Camera, Clock3, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { useI18n } from '@/lib/i18n';

const whatsapp = 'https://api.whatsapp.com/send/?phone=996755531212&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%0A%0A%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D1%82%D0%BE%D1%87%D0%BD%D0%B8%D1%82%D1%8C%20%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BF%D0%BE%20%D1%80%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD%D1%83.';

export default function ContactsPage() {
  const { t } = useI18n();
  return (
    <main className="min-h-screen bg-[#120e0d] text-[#fff7e8]">
      <SiteHeader />
      <section className="mx-auto max-w-[1440px] px-5 pb-16 pt-32 md:px-10 md:pt-40">
        <p className="mb-5 text-xs uppercase tracking-[.3em] text-[#ffb31a]">{t('contacts.eyebrow')}</p>
        <h1 className="font-display text-[clamp(4rem,10vw,8.5rem)] uppercase leading-[.82] tracking-[-.06em]">{t('contacts.title')}<br /><span className="text-[#df1c14]">{t('contacts.accent')}</span></h1>
        <div className="mt-14 grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[1.75rem] border border-white/10 bg-[#1a1311] p-6 md:p-8"><MapPin className="mb-8 size-7 text-[#ffb31a]" /><p className="text-xs uppercase tracking-[.22em] text-white/35">{t('contacts.addressLabel')}</p><h2 className="font-display mt-3 text-3xl uppercase">{t('contacts.address')}</h2><p className="mt-2 text-sm text-white/45">{t('contacts.district')}</p></div>
            <div className="rounded-[1.75rem] border border-white/10 bg-[#df1c14] p-6 md:p-8"><Clock3 className="mb-8 size-7" /><p className="text-xs uppercase tracking-[.22em] text-white/60">{t('contacts.hoursLabel')}</p><h2 className="font-display mt-3 text-3xl uppercase">{t('contacts.daily')}</h2><p className="mt-2 text-xl">08:00 — 00:00</p></div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#1a1311] lg:aspect-auto lg:min-h-[580px]">
            <iframe title={t('contacts.mapTitle')} src="https://www.openstreetmap.org/export/embed.html?bbox=74.6049%2C42.8166%2C74.6250%2C42.8287&layer=mapnik&marker=42.822682%2C74.614963" className="h-full w-full grayscale-[.75] contrast-125" loading="lazy" />
            <a href="https://2gis.kg/bishkek/firm/70000001056285083" target="_blank" rel="noreferrer" className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-[#ffb31a] px-5 py-3 text-sm font-semibold text-[#1a1007] shadow-xl"><Navigation className="size-4" /> {t('contacts.open2gis')}</a>
          </div>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <a href="tel:+996755531212" className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-[#ffb31a]/60"><span className="flex items-center gap-3"><Phone className="size-5 text-[#ffb31a]" /> +996 755 531 212</span><span className="text-white/30 transition group-hover:text-white">{t('contacts.call')}</span></a>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-[#25D366]/60"><span className="flex items-center gap-3"><MessageCircle className="size-5 text-[#25D366]" /> WhatsApp</span><span className="text-white/30 transition group-hover:text-white">{t('contacts.write')}</span></a>
          <a href="https://www.instagram.com/usta___restaurant/" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-[#df1c14]/70"><span className="flex items-center gap-3"><Camera className="size-5 text-[#df1c14]" /> @usta___restaurant</span><span className="text-white/30 transition group-hover:text-white">{t('contacts.watch')}</span></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
