import type { Locale } from '@/lib/i18n';

type LocalizedText = Record<Locale, string>;
export type CategoryId = 'new' | 'kids' | 'desserts' | 'drinks';

export type MenuItem = {
  id: string;
  name: LocalizedText;
  category: CategoryId;
  description: LocalizedText;
  price: number;
  weight?: string;
  image: string;
  imagePosition?: string;
};

export const menuCategories: { id: CategoryId }[] = [
  { id: 'new' }, { id: 'kids' }, { id: 'desserts' }, { id: 'drinks' },
];

const text = (ru: string, ky: string, tr: string): LocalizedText => ({ ru, ky, tr });

export const menuItems: MenuItem[] = [
  { id: 'kumpir', name: text('Кумпир', 'Кумпир', 'Kumpir'), category: 'new', description: text('Картофель, сыр сулугуни, маринованный корнишон, специи', 'Картошка, сулугуни сыры, маринаддалган корнишон, татымалдар', 'Patates, suluguni peyniri, kornişon turşu ve baharatlar'), price: 850, weight: '390 г', image: '/menu/photo_1_2026-08-30_21-22-33.jpg', imagePosition: '50% 62%' },
  { id: 'toast-sujuk', name: text('Тост с сыром и суджуком', 'Сыр жана суджук менен тост', 'Kaşarlı sucuklu tost'), category: 'new', description: text('Моцарелла, хрустящий хлеб, суджук, фри и соус', 'Моцарелла, кытырак нан, суджук, фри жана соус', 'Mozzarella, çıtır ekmek, sucuk, patates kızartması ve sos'), price: 566, weight: '280 г', image: '/menu/photo_19_2026-08-30_21-22-33.jpg', imagePosition: '50% 35%' },
  { id: 'usta-borek', name: text('Usta Börek', 'Usta Börek', 'Usta Börek'), category: 'new', description: text('Картофель, сладкий перец, черри и сливочное масло', 'Картошка, таттуу калемпир, черри жана сары май', 'Patates, tatlı biber, çeri domates ve tereyağı'), price: 485, weight: '280 г', image: '/menu/photo_19_2026-08-30_21-22-33.jpg', imagePosition: '50% 78%' },
  { id: 'kofte', name: text('Кофте табак', 'Кофте табак', 'Köfte tabağı'), category: 'kids', description: text('Котлеты касап, луковые кольца, картофель фри и кетчуп', 'Касап котлеттери, пияз шакекчелери, фри жана кетчуп', 'Kasap köfte, soğan halkası, patates kızartması ve ketçap'), price: 962, weight: '250 г', image: '/menu/photo_2_2026-08-30_21-22-33.jpg', imagePosition: '50% 34%' },
  { id: 'pane', name: text('Пане табак', 'Пане табак', 'Pane tabağı'), category: 'kids', description: text('Сосиски, наггетсы, картофель фри и кетчуп', 'Сосиска, наггетс, картошка фри жана кетчуп', 'Sosis, nugget, patates kızartması ve ketçap'), price: 834, weight: '470 г', image: '/menu/photo_2_2026-08-30_21-22-33.jpg', imagePosition: '50% 77%' },
  { id: 'cheese-toast', name: text('Тост с сыром', 'Сыр менен тост', 'Kaşarlı tost'), category: 'kids', description: text('Тостовый хлеб, сыр, салат, картофель фри и соус', 'Тост наны, сыр, салат, картошка фри жана соус', 'Tost ekmeği, peynir, salata, patates kızartması ve sos'), price: 478, weight: '280 г', image: '/menu/photo_20_2026-08-30_21-22-33.jpg', imagePosition: '50% 76%' },
  { id: 'katmer', name: text('Катмер', 'Катмер', 'Katmer'), category: 'desserts', description: text('Тонкое тесто с фисташкой, мороженым, мёдом и сливками', 'Мисте, балмуздак, бал жана каймак кошулган жука камыр', 'Antep fıstığı, dondurma, bal ve kaymakla ince hamur'), price: 1247, weight: '275 г', image: '/menu/photo_11_2026-08-30_21-22-33.jpg', imagePosition: '50% 33%' },
  { id: 'baklava', name: text('Пахлава с мороженым', 'Балмуздак менен баклава', 'Dondurmalı baklava'), category: 'desserts', description: text('Классическая пахлава с фисташкой и мороженым', 'Мисте жана балмуздак кошулган классикалык баклава', 'Antep fıstıklı klasik baklava ve dondurma'), price: 457, weight: '130 г', image: '/menu/photo_11_2026-08-30_21-22-33.jpg', imagePosition: '50% 76%' },
  { id: 'sutlac', name: text('Сютлач', 'Сүтлач', 'Sütlaç'), category: 'desserts', description: text('Нежный турецкий рисовый пудинг с фисташкой', 'Мисте кошулган назик түрк күрүч пудинги', 'Antep fıstıklı yumuşak Türk sütlacı'), price: 395, weight: '280 г', image: '/menu/photo_4_2026-08-30_21-22-33.jpg', imagePosition: '50% 32%' },
  { id: 'raspberry', name: text('Тарталетка с малиной', 'Малина тарталеткасы', 'Frambuazlı tartalet'), category: 'desserts', description: text('Хрустящая тарталетка со свежей малиной', 'Жаңы малина кошулган кытырак тарталетка', 'Taze frambuazlı çıtır tartalet'), price: 728, weight: '250 г', image: '/menu/photo_5_2026-08-30_21-22-33.jpg', imagePosition: '50% 34%' },
  { id: 'turkish-tea', name: text('Турецкий чай', 'Түрк чайы', 'Türk çayı'), category: 'drinks', description: text('Крепкий чай в традиционном тонком стакане', 'Салттуу ичке стакандагы демделген чай', 'Geleneksel ince belli bardakta demli çay'), price: 381, image: '/menu/photo_16_2026-08-30_21-22-33.jpg' },
  { id: 'turkish-coffee', name: text('Турецкий кофе', 'Түрк кофеси', 'Türk kahvesi'), category: 'drinks', description: text('Насыщенный кофе мелкого помола', 'Майда тартылган күчтүү кофе', 'İnce çekilmiş yoğun Türk kahvesi'), price: 219, image: '/menu/photo_18_2026-08-30_21-22-33.jpg' },
  { id: 'turkish-lemonade', name: text('Турецкий лимонад', 'Түрк лимонады', 'Türk limonatası'), category: 'drinks', description: text('Освежающий фирменный лимонад', 'Сергиткен фирмалык лимонад', 'Ferahlatıcı özel limonata'), price: 370, image: '/menu/photo_14_2026-08-30_21-22-33.jpg' },
  { id: 'ayran-mango', name: text('Айран манго', 'Манго айраны', 'Mangolu ayran'), category: 'drinks', description: text('Сливочный айран с тропическим манго', 'Тропикалык манго кошулган жумшак айран', 'Tropikal mangolu yumuşak ayran'), price: 485, image: '/menu/photo_12_2026-08-30_21-22-33.jpg' },
];
