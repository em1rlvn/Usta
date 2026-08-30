'use client';

import * as React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { useI18n } from '@/lib/i18n';

const slides = [
  { image: '/menu/photo_1_2026-08-30_21-22-33.jpg', key: 's1' },
  { image: '/menu/photo_11_2026-08-30_21-22-33.jpg', key: 's2' },
  { image: '/menu/photo_2_2026-08-30_21-22-33.jpg', key: 's3' },
  { image: '/menu/photo_19_2026-08-30_21-22-33.jpg', key: 's4' },
  { image: '/menu/photo_5_2026-08-30_21-22-33.jpg', key: 's5' },
];

export function AutoGallery() {
  const { t } = useI18n();
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const update = () => setCurrent(api.selectedScrollSnap());
    update();
    api.on('select', update);
    const timer = window.setInterval(() => api.scrollNext(), 4200);
    return () => { window.clearInterval(timer); api.off('select', update); };
  }, [api]);

  return (
    <div className="relative">
      <Carousel setApi={setApi} opts={{ loop: true, align: 'start' }} aria-label={t('gallery.label')}>
        <CarouselContent className="-ml-3 md:-ml-5">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.key} className="basis-[88%] pl-3 sm:basis-[64%] md:basis-[48%] md:pl-5 lg:basis-[40%]">
              <article className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#241915]">
                <img src={slide.image} alt={t(`gallery.${slide.key}t`)} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" style={{ objectPosition: index === 3 ? '50% 32%' : '50% 50%' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <span className="mb-3 block text-xs tracking-[.2em] text-[#ffb31a]">0{index + 1} / 05</span>
                  <h3 className="font-display text-3xl uppercase md:text-4xl">{t(`gallery.${slide.key}t`)}</h3>
                  <p className="mt-2 text-sm text-white/60">{t(`gallery.${slide.key}c`)}</p>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2" aria-hidden="true">
          {slides.map((slide, index) => <span key={slide.key} className={`h-1 rounded-full transition-all ${current === index ? 'w-10 bg-[#ffb31a]' : 'w-4 bg-white/20'}`} />)}
        </div>
        <div className="flex gap-2">
          <button onClick={() => api?.scrollPrev()} className="flex size-12 items-center justify-center rounded-full border border-white/15 transition hover:border-[#ffb31a] hover:text-[#ffb31a]" aria-label={t('gallery.prev')}><ArrowLeft className="size-5" /></button>
          <button onClick={() => api?.scrollNext()} className="flex size-12 items-center justify-center rounded-full border border-white/15 transition hover:border-[#ffb31a] hover:text-[#ffb31a]" aria-label={t('gallery.next')}><ArrowRight className="size-5" /></button>
        </div>
      </div>
    </div>
  );
}
