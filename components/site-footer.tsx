import Link from 'next/link';
import { Camera, MapPin, Phone } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0c0908]">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 md:grid-cols-[1.3fr_1fr_1fr] md:px-10">
        <div>
          <div className="font-display text-5xl tracking-[-0.08em] text-[#ff2a1a]">USTA</div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/45">История вкуса с 2008 года. Традиция, огонь и настоящее турецкое гостеприимство.</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="mb-4 text-xs uppercase tracking-[.24em] text-[#ffb31a]">Навигация</p>
          <Link href="/menu" className="block text-white/65 hover:text-white">Меню</Link>
          <Link href="/contacts" className="block text-white/65 hover:text-white">Контакты</Link>
          <a href="https://www.instagram.com/usta___restaurant/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/65 hover:text-white"><Camera className="size-4" /> Instagram</a>
        </div>
        <div className="space-y-3 text-sm text-white/65">
          <p className="mb-4 text-xs uppercase tracking-[.24em] text-[#ffb31a]">Ресторан</p>
          <p className="flex gap-2"><MapPin className="mt-0.5 size-4 shrink-0" /> ул. Аалы Токомбаева, 25<br />Бишкек</p>
          <a href="tel:+996755531212" className="flex items-center gap-2 hover:text-white"><Phone className="size-4" /> +996 755 531 212</a>
        </div>
      </div>
      <div className="border-t border-white/8 px-5 py-5 text-center text-xs text-white/30">© 2008–2026 Usta Turkish Restaurant. Все права защищены.</div>
    </footer>
  );
}
