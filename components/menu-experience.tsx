'use client';

import * as React from 'react';
import { Check, Heart, MessageCircle, Search, ShoppingBag, X } from 'lucide-react';
import { menuCategories, menuItems } from '@/lib/menu-data';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export function MenuExperience() {
  const [active, setActive] = React.useState<string>('Все');
  const [query, setQuery] = React.useState('');
  const [favorites, setFavorites] = React.useState<string[]>([]);
  const [favoritesOpen, setFavoritesOpen] = React.useState(false);

  React.useEffect(() => {
    try { setFavorites(JSON.parse(localStorage.getItem('usta-favorites') || '[]')); } catch { setFavorites([]); }
  }, []);

  const toggle = (id: string) => {
    const next = favorites.includes(id) ? favorites.filter((item) => item !== id) : [...favorites, id];
    setFavorites(next);
    localStorage.setItem('usta-favorites', JSON.stringify(next));
  };

  const visible = menuItems.filter((item) => {
    const matchesCategory = active === 'Все' || item.category === active;
    const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });
  const chosen = menuItems.filter((item) => favorites.includes(item.id));
  const whatsappHref = `https://api.whatsapp.com/send/?phone=996755531212&text=${encodeURIComponent(`Здравствуйте! Меня заинтересовали блюда:\n${chosen.map((item) => `• ${item.name} — ${item.price} с`).join('\n')}\n\nПодскажите, пожалуйста, можно ли оформить заказ?`)}`;

  return (
    <>
      <section className="mx-auto max-w-[1440px] px-5 pb-8 pt-32 md:px-10 md:pt-40">
        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[.3em] text-[#ffb31a]">Выберите свой вкус</p>
            <h1 className="font-display text-[clamp(4rem,10vw,8.5rem)] uppercase leading-[.82] tracking-[-.06em]">Меню<br /><span className="text-[#df1c14]">Usta</span></h1>
          </div>
          <p className="max-w-md text-base leading-relaxed text-white/50 lg:pb-3">Добавляйте понравившиеся позиции в избранное. Мы соберём аккуратный список и подготовим сообщение для WhatsApp.</p>
        </div>
      </section>

      <div className="sticky top-20 z-30 border-y border-white/10 bg-[#120e0d]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1 md:pb-0">
            {['Все', ...menuCategories.map((item) => item.name)].map((category) => (
              <button key={category} onClick={() => setActive(category)} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${active === category ? 'bg-[#ffb31a] font-semibold text-[#1a1007]' : 'border border-white/12 text-white/55 hover:text-white'}`}>{category}</button>
            ))}
          </div>
          <div className="flex gap-2">
            <label className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 md:w-60">
              <Search className="size-4 text-white/35" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} className="min-w-0 flex-1 bg-transparent py-2.5 text-sm outline-none placeholder:text-white/30" placeholder="Найти блюдо" aria-label="Поиск по меню" />
              {query && <button onClick={() => setQuery('')} aria-label="Очистить поиск"><X className="size-3.5" /></button>}
            </label>
            <button onClick={() => setFavoritesOpen(true)} className="relative flex size-11 shrink-0 items-center justify-center rounded-full bg-[#df1c14]" aria-label={`Избранное: ${favorites.length}`}>
              <Heart className="size-5" fill={favorites.length ? 'currentColor' : 'none'} />
              {favorites.length > 0 && <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-[#ffb31a] text-[10px] font-bold text-black">{favorites.length}</span>}
            </button>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-[1440px] px-5 py-10 md:px-10 md:py-16">
        {visible.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((item, index) => {
              const saved = favorites.includes(item.id);
              return (
                <article id={encodeURIComponent(item.category)} key={item.id} className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#1a1311] transition duration-300 hover:-translate-y-1 hover:border-[#ffb31a]/50">
                  <div className="relative aspect-[4/3] overflow-hidden bg-black">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" style={{ objectPosition: item.imagePosition || '50% 50%' }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1.5 text-[10px] uppercase tracking-[.16em] backdrop-blur-md">{item.category}</span>
                    <button onClick={() => toggle(item.id)} className={`absolute right-4 top-4 flex size-10 items-center justify-center rounded-full backdrop-blur-md transition ${saved ? 'bg-[#df1c14] text-white' : 'bg-black/45 hover:bg-white hover:text-black'}`} aria-label={saved ? `Убрать ${item.name} из избранного` : `Добавить ${item.name} в избранное`}>
                      <Heart className="size-5" fill={saved ? 'currentColor' : 'none'} />
                    </button>
                    <span className="absolute bottom-4 left-4 font-display text-sm text-[#ffb31a]">0{index + 1}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="font-display text-2xl uppercase leading-tight">{item.name}</h2>
                      <strong className="whitespace-nowrap rounded-lg bg-[#ffb31a] px-2.5 py-1.5 text-sm text-[#1a1007]">{item.price} с</strong>
                    </div>
                    <p className="mt-3 min-h-10 text-xs leading-relaxed text-white/45">{item.description}</p>
                    {item.weight && <p className="mt-4 text-[11px] uppercase tracking-[.18em] text-white/30">{item.weight}</p>}
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-white/15 py-24 text-center"><Search className="mx-auto mb-4 size-8 text-white/25" /><h2 className="font-display text-3xl uppercase">Ничего не найдено</h2><p className="mt-2 text-sm text-white/40">Попробуйте другое название или категорию.</p></div>
        )}
      </section>

      <Dialog open={favoritesOpen} onOpenChange={setFavoritesOpen}>
        <DialogContent className="max-h-[85vh] max-w-lg overflow-y-auto border-white/10 bg-[#1a1311] p-6 text-white sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-3xl uppercase">Ваш выбор</DialogTitle>
            <DialogDescription className="text-white/45">Список сохранён на этом устройстве.</DialogDescription>
          </DialogHeader>
          {chosen.length ? (
            <div className="mt-2 space-y-2">
              {chosen.map((item) => <div key={item.id} className="flex items-center justify-between gap-3 rounded-xl bg-white/5 p-3"><div className="flex items-center gap-3"><span className="flex size-8 items-center justify-center rounded-full bg-[#ffb31a] text-black"><Check className="size-4" /></span><div><strong className="block text-sm">{item.name}</strong><span className="text-xs text-white/40">{item.price} сом</span></div></div><button onClick={() => toggle(item.id)} className="text-white/35 hover:text-white" aria-label={`Удалить ${item.name}`}><X className="size-4" /></button></div>)}
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-4 font-semibold text-[#071b0e] transition hover:brightness-110"><MessageCircle className="size-5" /> Отправить список в WhatsApp</a>
            </div>
          ) : (
            <div className="py-12 text-center"><ShoppingBag className="mx-auto mb-4 size-9 text-white/25" /><p className="text-sm text-white/45">Нажмите на сердечко у блюда, чтобы оно появилось здесь.</p></div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
