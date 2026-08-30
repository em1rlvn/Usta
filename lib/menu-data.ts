export type MenuItem = {
  id: string;
  name: string;
  category: 'Новинки' | 'Детское меню' | 'Десерты' | 'Напитки';
  description: string;
  price: number;
  weight?: string;
  image: string;
  imagePosition?: string;
};

export const menuCategories = [
  { name: 'Новинки', note: 'Кумпир, бёрек и горячие тосты' },
  { name: 'Детское меню', note: 'Понятные блюда для маленьких гостей' },
  { name: 'Десерты', note: 'Пахлава, катмер и авторские сладости' },
  { name: 'Напитки', note: 'Турецкий чай, кофе и лимонады' },
] as const;

export const menuItems: MenuItem[] = [
  { id: 'kumpir', name: 'Кумпир', category: 'Новинки', description: 'Картофель, сыр сулугуни, маринованный корнишон, специи', price: 850, weight: '390 г', image: '/menu/photo_1_2026-08-30_21-22-33.jpg', imagePosition: '50% 62%' },
  { id: 'toast-sujuk', name: 'Тост с сыром и суджуком', category: 'Новинки', description: 'Моцарелла, хрустящий хлеб, суджук, фри и соус', price: 566, weight: '280 г', image: '/menu/photo_19_2026-08-30_21-22-33.jpg', imagePosition: '50% 35%' },
  { id: 'usta-borek', name: 'Usta Börek', category: 'Новинки', description: 'Картофель, сладкий перец, черри и сливочное масло', price: 485, weight: '280 г', image: '/menu/photo_19_2026-08-30_21-22-33.jpg', imagePosition: '50% 78%' },
  { id: 'kofte', name: 'Кофте табак', category: 'Детское меню', description: 'Котлеты касап, луковые кольца, картофель фри и кетчуп', price: 962, weight: '250 г', image: '/menu/photo_2_2026-08-30_21-22-33.jpg', imagePosition: '50% 34%' },
  { id: 'pane', name: 'Пане табак', category: 'Детское меню', description: 'Сосиски, наггетсы, картофель фри и кетчуп', price: 834, weight: '470 г', image: '/menu/photo_2_2026-08-30_21-22-33.jpg', imagePosition: '50% 77%' },
  { id: 'cheese-toast', name: 'Тост с сыром', category: 'Детское меню', description: 'Тостовый хлеб, сыр, салат, картофель фри и соус', price: 478, weight: '280 г', image: '/menu/photo_20_2026-08-30_21-22-33.jpg', imagePosition: '50% 76%' },
  { id: 'katmer', name: 'Катмер', category: 'Десерты', description: 'Тонкое тесто с фисташкой, мороженым, мёдом и сливками', price: 1247, weight: '275 г', image: '/menu/photo_11_2026-08-30_21-22-33.jpg', imagePosition: '50% 33%' },
  { id: 'baklava', name: 'Пахлава с мороженым', category: 'Десерты', description: 'Классическая пахлава с фисташкой и мороженым', price: 457, weight: '130 г', image: '/menu/photo_11_2026-08-30_21-22-33.jpg', imagePosition: '50% 76%' },
  { id: 'sutlac', name: 'Сютлач', category: 'Десерты', description: 'Нежный турецкий рисовый пудинг с фисташкой', price: 395, weight: '280 г', image: '/menu/photo_4_2026-08-30_21-22-33.jpg', imagePosition: '50% 32%' },
  { id: 'raspberry', name: 'Тарталетка с малиной', category: 'Десерты', description: 'Хрустящая тарталетка со свежей малиной', price: 728, weight: '250 г', image: '/menu/photo_5_2026-08-30_21-22-33.jpg', imagePosition: '50% 34%' },
  { id: 'turkish-tea', name: 'Турецкий чай', category: 'Напитки', description: 'Крепкий чай в традиционном тонком стакане', price: 381, image: '/menu/photo_16_2026-08-30_21-22-33.jpg' },
  { id: 'turkish-coffee', name: 'Турецкий кофе', category: 'Напитки', description: 'Насыщенный кофе мелкого помола', price: 219, image: '/menu/photo_18_2026-08-30_21-22-33.jpg' },
  { id: 'turkish-lemonade', name: 'Турецкий лимонад', category: 'Напитки', description: 'Освежающий фирменный лимонад', price: 370, image: '/menu/photo_14_2026-08-30_21-22-33.jpg' },
  { id: 'ayran-mango', name: 'Айран манго', category: 'Напитки', description: 'Сливочный айран с тропическим манго', price: 485, image: '/menu/photo_12_2026-08-30_21-22-33.jpg' },
];
