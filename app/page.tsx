'use client';

import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Flame, MapPin, MessageCircle, Quote, Star } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { AutoGallery } from '@/components/auto-gallery';
import { menuItems } from '@/lib/menu-data';
import { useI18n } from '@/lib/i18n';

const whatsapp = 'https://api.whatsapp.com/send/?phone=996755531212&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%0A%0A%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D1%81%D1%82%D0%BE%D0%BB.';

const weekly = [
  { id: 'katmer', note: 'week.katmerNote', price: 1247, image: '/menu/photo_11_2026-08-30_21-22-33.jpg', position: '50% 32%' },
  { id: 'kumpir', note: 'week.kumpirNote', price: 850, image: '/menu/photo_1_2026-08-30_21-22-33.jpg', position: '50% 62%' },
  { id: 'usta-borek', note: 'week.borekNote', price: 485, image: '/menu/photo_19_2026-08-30_21-22-33.jpg', position: '50% 78%' },
];

const reviews = [
  { author: 'Azmt', text: 'reviews.r1' },
  { author: 'Aichurek Baiastanova', text: 'reviews.r2' },
  { author: 'Айдай Мелисова', text: 'reviews.r3' },
];

export default function Home() {
  const { locale, t } = useI18n();
  return (
    <main className="min-h-screen overflow-hidden bg-[#120e0d] text-[#fff7e8]">
      <SiteHeader />

      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover object-center" src="/hero.mp4" autoPlay muted loop playsInline />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,13,.96)_0%,rgba(18,14,13,.54)_52%,rgba(18,14,13,.1)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#120e0d] to-transparent" />
        <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 -rotate-90 text-[10px] uppercase tracking-[.35em] text-white/35 lg:block">Steak · Kebab · Döner · Since 2008</div>

        <div className="relative mx-auto flex min-h-[100svh] max-w-[1440px] items-end px-5 pb-20 pt-32 md:px-10 md:pb-16">
          <div className="w-full max-w-5xl animate-[hero-in_.9s_ease-out_both]">
            <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-[#ffb31a]"><span className="h-px w-12 bg-current" /> {t('home.eyebrow')}</p>
            <h1 className="font-display max-w-5xl text-[clamp(3.8rem,9.5vw,8.8rem)] uppercase leading-[0.78] tracking-[-0.065em]">{t('home.title')} <span className="text-[#ff2a1a]">{t('home.titleAccent')}</span></h1>
            <div className="mt-9 flex max-w-4xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-base leading-relaxed text-white/62 md:text-lg">{t('home.heroText')}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/menu" className="group inline-flex items-center gap-5 rounded-full bg-[#ffb31a] px-6 py-4 font-semibold text-[#1a1007] transition hover:scale-[1.03]">{t('home.viewMenu')} <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
                <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-6 py-4 backdrop-blur-md transition hover:bg-white hover:text-black"><MessageCircle className="size-4" /> {t('home.reserve')}</a>
              </div>
            </div>
          </div>
          <a href="#restaurant" className="absolute bottom-7 right-5 flex size-12 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white hover:text-white md:right-10" aria-label={t('home.scroll')}><ArrowDown className="size-5 animate-bounce" /></a>
        </div>
      </section>

      <div className="marquee border-y border-[#ff2a1a]/50 bg-[#df1c14] py-3 text-[#fff7e8]">
        <div className="marquee-track font-display flex min-w-max gap-10 text-xl uppercase tracking-[.03em]">
          {[0, 1].map((group) => <div key={group} className="flex gap-10" aria-hidden={group === 1}><span>{t('home.marqueeTradition')}</span><span className="text-[#ffb31a]">✦</span><span>{t('home.marqueeFire')}</span><span className="text-[#ffb31a]">✦</span><span>{t('home.marqueeHospitality')}</span><span className="text-[#ffb31a]">✦</span><span>Steak & Kebab & Döner</span><span className="text-[#ffb31a]">✦</span></div>)}
        </div>
      </div>

      <section id="restaurant" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
        <div className="mb-12 grid gap-8 md:grid-cols-[1fr_1fr] md:items-end">
          <div><p className="mb-5 text-xs uppercase tracking-[.3em] text-[#ffb31a]">{t('gallery.eyebrow')}</p><h2 className="font-display text-[clamp(3.5rem,7vw,7rem)] uppercase leading-[.83] tracking-[-.055em]">{t('gallery.title')}<br /><span className="text-[#df1c14]">{t('gallery.titleAccent')}</span></h2></div>
          <p className="max-w-md text-base leading-relaxed text-white/45 md:justify-self-end md:pb-2">{t('gallery.text')}</p>
        </div>
        <AutoGallery />
      </section>

      <section className="relative border-y border-white/10 bg-[#f3e5cf] py-24 text-[#201510] md:py-32">
        <div className="turkish-pattern absolute inset-0 opacity-[.045]" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-5 text-xs uppercase tracking-[.3em] text-[#b11812]">{t('week.eyebrow')}</p><h2 className="font-display text-[clamp(3.5rem,7vw,7rem)] uppercase leading-[.83] tracking-[-.055em]">{t('week.title')}<br />{t('week.title2')}</h2></div><Link href="/menu" className="group inline-flex w-fit items-center gap-3 border-b border-black/25 pb-2 text-sm font-semibold">{t('week.all')} <ArrowUpRight className="size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></Link></div>
          <div className="grid gap-5 md:grid-cols-3">
            {weekly.map((dish, index) => {
              const item = menuItems.find((entry) => entry.id === dish.id)!;
              return (
              <article key={dish.id} className={`group relative overflow-hidden rounded-[1.75rem] bg-[#18100d] text-white ${index === 1 ? 'md:-translate-y-8' : ''}`}>
                <div className="aspect-[4/5] overflow-hidden"><img src={dish.image} alt={item.name[locale]} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" style={{ objectPosition: dish.position }} /></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-black/25 px-3 py-1.5 text-[10px] uppercase tracking-[.18em] backdrop-blur">{t('week.label')} 0{index + 1}</span>
                <div className="absolute inset-x-0 bottom-0 p-6"><div className="flex items-end justify-between gap-4"><div><h3 className="font-display text-3xl uppercase">{item.name[locale]}</h3><p className="mt-1 text-xs text-white/55">{t(dish.note)}</p></div><strong className="rounded-lg bg-[#ffb31a] px-3 py-2 text-sm text-black">{dish.price} {t('menu.currency')}</strong></div></div>
              </article>
            )})}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-24 md:grid-cols-[1fr_1fr] md:px-10 md:py-32">
        <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] bg-[#211613]">
          <video className="h-full w-full object-cover" src="/hero.mp4" autoPlay muted loop playsInline />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-7 left-7 flex items-center gap-3 text-sm"><span className="flex size-11 items-center justify-center rounded-full bg-[#df1c14]"><Flame className="size-5" /></span>{t('story.badge')}</div>
        </div>
        <div className="flex flex-col justify-center md:px-6">
          <p className="mb-5 text-xs uppercase tracking-[.3em] text-[#ffb31a]">{t('story.eyebrow')}</p>
          <h2 className="font-display text-[clamp(3.5rem,6vw,6.5rem)] uppercase leading-[.83] tracking-[-.055em]">{t('story.title')}<br /><span className="text-[#df1c14]">{t('story.accent')}</span></h2>
          <p className="mt-8 max-w-xl text-base leading-8 text-white/50">{t('story.text')}</p>
          <div className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-white/10">
            <div className="bg-[#1a1311] p-5"><strong className="font-display block text-3xl text-[#ffb31a]">2008</strong><span className="mt-1 block text-xs text-white/35">{t('story.founded')}</span></div>
            <div className="bg-[#1a1311] p-5"><strong className="font-display block text-3xl text-[#ffb31a]">100%</strong><span className="mt-1 block text-xs text-white/35">{t('story.halal')}</span></div>
            <div className="bg-[#1a1311] p-5"><strong className="font-display block text-3xl text-[#ffb31a]">7/7</strong><span className="mt-1 block text-xs text-white/35">{t('story.guests')}</span></div>
          </div>
        </div>
      </section>

      <section id="reviews" className="border-y border-white/10 bg-[#0d0a09] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="mb-5 text-xs uppercase tracking-[.3em] text-[#ffb31a]">{t('reviews.eyebrow')}</p><h2 className="font-display text-[clamp(3.5rem,7vw,7rem)] uppercase leading-[.83] tracking-[-.055em]">{t('reviews.title')}<br /><span className="text-[#df1c14]">{t('reviews.accent')}</span></h2></div><a href="https://2gis.kg/bishkek/firm/70000001056285083/tab/reviews" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"><span className="font-display text-4xl text-[#ffb31a]">4.9</span><span className="whitespace-pre-line text-xs leading-relaxed text-white/40">{t('reviews.ratings')}</span><ArrowUpRight className="ml-3 size-5 text-white/40" /></a></div>
          <div className="grid gap-4 md:grid-cols-3">
            {reviews.map((review, index) => <article key={review.author} className={`rounded-[1.5rem] border p-6 md:p-8 ${index === 1 ? 'border-[#df1c14]/60 bg-[#df1c14]' : 'border-white/10 bg-[#1a1311]'}`}><div className="mb-10 flex items-center justify-between"><Quote className={`size-7 ${index === 1 ? 'text-white/50' : 'text-[#ffb31a]'}`} /><div className="flex gap-1" aria-label="5 / 5">{[0,1,2,3,4].map((star) => <Star key={star} className="size-3.5 fill-[#ffb31a] text-[#ffb31a]" />)}</div></div><p className="text-lg leading-relaxed">«{t(review.text)}»</p><p className={`mt-8 text-xs uppercase tracking-[.18em] ${index === 1 ? 'text-white/60' : 'text-white/35'}`}>{review.author}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#df1c14] p-6 md:p-12 lg:p-16">
          <div className="turkish-pattern absolute inset-0 opacity-[.08]" aria-hidden="true" />
          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div><p className="mb-5 text-xs uppercase tracking-[.3em] text-[#ffcf6a]">{t('location.eyebrow')}</p><h2 className="font-display text-[clamp(3.5rem,7vw,7.5rem)] uppercase leading-[.82] tracking-[-.055em]">{t('location.title')}<br /><span className="text-[#ffb31a]">{t('location.accent')}</span></h2></div>
            <div className="space-y-4"><p className="flex items-start gap-3 text-lg"><MapPin className="mt-1 size-5 shrink-0 text-[#ffb31a]" />{t('location.address')}</p><p className="text-sm text-white/60">{t('location.hours')}</p><div className="flex flex-wrap gap-3 pt-3"><Link href="/contacts" className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 font-semibold text-black">{t('location.route')} <ArrowUpRight className="size-4" /></Link><a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-4"><MessageCircle className="size-4" /> {t('location.write')}</a></div></div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
