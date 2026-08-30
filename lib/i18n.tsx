'use client';

import * as React from 'react';

export type Locale = 'ru' | 'ky' | 'tr';

const ru = {
  'nav.menu': 'Меню', 'nav.restaurant': 'Ресторан', 'nav.reviews': 'Отзывы', 'nav.contacts': 'Контакты', 'nav.whatsapp': 'WhatsApp', 'nav.open': 'Открыть меню', 'nav.home': 'Usta — главная', 'nav.primary': 'Главная навигация', 'nav.language': 'Выбор языка',
  'category.new': 'Новинки', 'category.newNote': 'Кумпир, бёрек и горячие тосты', 'category.kids': 'Детское меню', 'category.kidsNote': 'Понятные блюда для маленьких гостей', 'category.desserts': 'Десерты', 'category.dessertsNote': 'Пахлава, катмер и авторские сладости', 'category.drinks': 'Напитки', 'category.drinksNote': 'Турецкий чай, кофе и лимонады',
  'home.eyebrow': 'Турецкая кухня · Бишкек', 'home.title': 'Настоящий вкус', 'home.titleAccent': 'Востока', 'home.heroText': 'Огонь, щедрость и гостеприимство. Ресторан, где турецкие традиции живут с 2008 года.', 'home.viewMenu': 'Смотреть меню', 'home.reserve': 'Забронировать', 'home.scroll': 'Прокрутить вниз',
  'home.marqueeTradition': 'Традиция', 'home.marqueeFire': 'Огонь', 'home.marqueeHospitality': 'Гостеприимство',
  'gallery.eyebrow': 'Ресторан в кадре', 'gallery.title': 'Сначала', 'gallery.titleAccent': 'глазами', 'gallery.text': 'Листайте жестом или стрелками. Галерея продолжит движение сама — как вечер в Usta, неспешно и с новым вкусом в каждом кадре.', 'gallery.label': 'Галерея Usta', 'gallery.prev': 'Предыдущий кадр', 'gallery.next': 'Следующий кадр',
  'gallery.s1t': 'Новое прочтение', 'gallery.s1c': 'Блюда, которые хочется рассматривать', 'gallery.s2t': 'Турецкие сладости', 'gallery.s2c': 'Фисташка, мёд и тончайшее тесто', 'gallery.s3t': 'Для всей семьи', 'gallery.s3c': 'Большие порции и знакомые вкусы', 'gallery.s4t': 'Из печи', 'gallery.s4c': 'Хрустящий бёрек и горячие тосты', 'gallery.s5t': 'Финальный акцент', 'gallery.s5c': 'Свежие ягоды и авторские десерты',
  'week.eyebrow': 'Выбор команды', 'week.title': 'Блюда', 'week.title2': 'недели', 'week.all': 'Всё меню', 'week.label': 'Неделя', 'week.katmerNote': 'Фисташка · тонкое тесто · мороженое', 'week.kumpirNote': 'Картофель · сулугуни · специи', 'week.borekNote': 'Картофель · перец · сливочное масло',
  'story.badge': 'Живой огонь. Честный вкус.', 'story.eyebrow': 'Наша история', 'story.title': 'Место, которое', 'story.accent': 'помнят', 'story.text': 'В Usta всё начинается с людей: поваров, которые знают характер огня, и гостей, возвращающихся за любимыми блюдами. Здесь современная подача не спорит с традицией — она помогает услышать её ярче.', 'story.founded': 'год основания', 'story.halal': 'халяль', 'story.guests': 'для гостей',
  'reviews.eyebrow': 'Отзывы гостей · 2ГИС', 'reviews.title': 'Говорят', 'reviews.accent': 'о нас', 'reviews.ratings': '1800+ оценок\nна 2ГИС', 'reviews.r1': 'Нереально крутая атмосфера, погружающая в Турцию. Очень вкусно, отличный сервис.', 'reviews.r2': 'Все блюда вкусные и приятная атмосфера.', 'reviews.r3': 'Всё очень вкусно, обслуживание топ.',
  'location.eyebrow': 'Аалы Токомбаева, 25', 'location.title': 'Восток уже', 'location.accent': 'рядом', 'location.address': 'Бишкек, ул. Аалы Токомбаева, 25', 'location.hours': 'Открыты ежедневно с 08:00 до 00:00', 'location.route': 'Как добраться', 'location.write': 'Написать',
  'menu.eyebrow': 'Выберите свой вкус', 'menu.title': 'Меню', 'menu.description': 'Добавляйте понравившиеся позиции в избранное. Мы соберём аккуратный список и подготовим сообщение для WhatsApp.', 'menu.all': 'Все', 'menu.search': 'Найти блюдо', 'menu.clear': 'Очистить поиск', 'menu.favorites': 'Избранное', 'menu.add': 'Добавить в избранное', 'menu.remove': 'Убрать из избранного', 'menu.emptyTitle': 'Ничего не найдено', 'menu.emptyText': 'Попробуйте другое название или категорию.', 'menu.selection': 'Ваш выбор', 'menu.saved': 'Список сохранён на этом устройстве.', 'menu.delete': 'Удалить', 'menu.send': 'Отправить список в WhatsApp', 'menu.noFavorites': 'Нажмите на сердечко у блюда, чтобы оно появилось здесь.', 'menu.hello': 'Здравствуйте! Меня заинтересовали блюда:', 'menu.question': 'Подскажите, пожалуйста, можно ли оформить заказ?', 'menu.currency': 'с',
  'contacts.eyebrow': 'Найдите нас в Бишкеке', 'contacts.title': 'Всегда', 'contacts.accent': 'рады вам', 'contacts.addressLabel': 'Адрес', 'contacts.address': 'Аалы Токомбаева, 25', 'contacts.district': 'Октябрьский район, Бишкек', 'contacts.hoursLabel': 'Режим работы', 'contacts.daily': 'Ежедневно', 'contacts.mapTitle': 'Usta Turkish Restaurant на карте', 'contacts.open2gis': 'Открыть в 2ГИС', 'contacts.call': 'Позвонить', 'contacts.write': 'Написать', 'contacts.watch': 'Смотреть',
  'footer.text': 'История вкуса с 2008 года. Традиция, огонь и настоящее турецкое гостеприимство.', 'footer.navigation': 'Навигация', 'footer.restaurant': 'Ресторан', 'footer.address': 'ул. Аалы Токомбаева, 25\nБишкек', 'footer.rights': 'Все права защищены.',
};

type TranslationKey = keyof typeof ru;

const ky: Record<TranslationKey, string> = {
  ...ru,
  'nav.menu': 'Меню', 'nav.restaurant': 'Ресторан', 'nav.reviews': 'Пикирлер', 'nav.contacts': 'Байланыш', 'nav.open': 'Менюну ачуу', 'nav.home': 'Usta — башкы бет', 'nav.primary': 'Башкы навигация', 'nav.language': 'Тилди тандоо',
  'category.new': 'Жаңы даамдар', 'category.newNote': 'Кумпир, бөрөк жана ысык тосттор', 'category.kids': 'Балдар менюсу', 'category.kidsNote': 'Кичинекей коноктор үчүн тааныш даамдар', 'category.desserts': 'Таттуулар', 'category.dessertsNote': 'Баклава, катмер жана автордук десерттер', 'category.drinks': 'Суусундуктар', 'category.drinksNote': 'Түрк чайы, кофе жана лимонаддар',
  'home.eyebrow': 'Түрк ашканасы · Бишкек', 'home.title': 'Чыгыштын чыныгы', 'home.titleAccent': 'даамы', 'home.heroText': 'От, берешендик жана меймандостук. Түрк салттары 2008-жылдан бери жашап келген ресторан.', 'home.viewMenu': 'Менюну көрүү', 'home.reserve': 'Стол ээлөө', 'home.scroll': 'Төмөн жылдыруу',
  'home.marqueeTradition': 'Салт', 'home.marqueeFire': 'От', 'home.marqueeHospitality': 'Меймандостук',
  'gallery.eyebrow': 'Ресторан кадрда', 'gallery.title': 'Адегенде', 'gallery.titleAccent': 'көз менен', 'gallery.text': 'Манжаңыз менен же жебелер аркылуу жылдырыңыз. Галерея Ustaдагы кеч сыяктуу жай жана ар бир кадрда жаңы даам менен өзү кыймылдайт.', 'gallery.label': 'Usta галереясы', 'gallery.prev': 'Мурунку кадр', 'gallery.next': 'Кийинки кадр',
  'gallery.s1t': 'Жаңы көз караш', 'gallery.s1c': 'Көз тойбой караган тамактар', 'gallery.s2t': 'Түрк таттуулары', 'gallery.s2c': 'Мисте, бал жана эң жука камыр', 'gallery.s3t': 'Бүт үй-бүлө үчүн', 'gallery.s3c': 'Чоң порциялар жана тааныш даамдар', 'gallery.s4t': 'Мештен жаңы', 'gallery.s4c': 'Кытырак бөрөк жана ысык тосттор', 'gallery.s5t': 'Акыркы акцент', 'gallery.s5c': 'Жаңы мөмөлөр жана автордук десерттер',
  'week.eyebrow': 'Команданын тандоосу', 'week.title': 'Аптанын', 'week.title2': 'тамактары', 'week.all': 'Толук меню', 'week.label': 'Апта', 'week.katmerNote': 'Мисте · жука камыр · балмуздак', 'week.kumpirNote': 'Картошка · сулугуни · татымалдар', 'week.borekNote': 'Картошка · калемпир · сары май',
  'story.badge': 'Жандуу от. Чыныгы даам.', 'story.eyebrow': 'Биздин тарых', 'story.title': 'Эсте калган', 'story.accent': 'жай', 'story.text': 'Ustaда баары адамдардан башталат: оттун мүнөзүн билген ашпозчулардан жана сүйүктүү тамактары үчүн кайра келген коноктордон. Заманбап берүү салт менен талашпайт — аны дагы даана угууга жардам берет.', 'story.founded': 'түзүлгөн жыл', 'story.halal': 'халал', 'story.guests': 'коноктор үчүн',
  'reviews.eyebrow': 'Коноктордун пикири · 2ГИС', 'reviews.title': 'Биз жөнүндө', 'reviews.accent': 'айтышат', 'reviews.ratings': '2ГИСте\n1800+ баа', 'reviews.r1': 'Түркиянын атмосферасына бөлөгөн сонун жер. Абдан даамдуу, кызматы мыкты.', 'reviews.r2': 'Бардык тамактар даамдуу, атмосферасы жагымдуу.', 'reviews.r3': 'Баары абдан даамдуу, тейлөө эң жогорку деңгээлде.',
  'location.title': 'Чыгыш сизге', 'location.accent': 'жакын', 'location.address': 'Бишкек, Аалы Токомбаев көчөсү, 25', 'location.hours': 'Күн сайын 08:00дөн 00:00гө чейин ачык', 'location.route': 'Жолду көрүү', 'location.write': 'Жазуу',
  'menu.eyebrow': 'Өз даамыңызды тандаңыз', 'menu.description': 'Жаккан тамактарды тандалмаларга кошуңуз. Биз тизмени түзүп, WhatsApp үчүн даяр билдирүү жасайбыз.', 'menu.all': 'Баары', 'menu.search': 'Тамак издөө', 'menu.clear': 'Издөөнү тазалоо', 'menu.favorites': 'Тандалмалар', 'menu.add': 'Тандалмаларга кошуу', 'menu.remove': 'Тандалмалардан алып салуу', 'menu.emptyTitle': 'Эч нерсе табылган жок', 'menu.emptyText': 'Башка аталышты же категорияны байкап көрүңүз.', 'menu.selection': 'Сиздин тандоо', 'menu.saved': 'Тизме ушул түзмөктө сакталды.', 'menu.delete': 'Өчүрүү', 'menu.send': 'Тизмени WhatsAppка жөнөтүү', 'menu.noFavorites': 'Тамакты бул жерге кошуу үчүн жүрөкчөнү басыңыз.', 'menu.hello': 'Саламатсызбы! Мени төмөнкү тамактар кызыктырды:', 'menu.question': 'Буйрутма берсе болобу?', 'menu.currency': 'с',
  'contacts.eyebrow': 'Бизди Бишкектен табыңыз', 'contacts.title': 'Сизди ар дайым', 'contacts.accent': 'күтөбүз', 'contacts.addressLabel': 'Дарек', 'contacts.address': 'Аалы Токомбаев көчөсү, 25', 'contacts.district': 'Октябрь району, Бишкек', 'contacts.hoursLabel': 'Иш убактысы', 'contacts.daily': 'Күн сайын', 'contacts.mapTitle': 'Usta Turkish Restaurant картада', 'contacts.open2gis': '2ГИСте ачуу', 'contacts.call': 'Чалуу', 'contacts.write': 'Жазуу', 'contacts.watch': 'Көрүү',
  'footer.text': '2008-жылдан берки даам тарыхы. Салт, от жана чыныгы түрк меймандостугу.', 'footer.navigation': 'Навигация', 'footer.restaurant': 'Ресторан', 'footer.address': 'Аалы Токомбаев көчөсү, 25\nБишкек', 'footer.rights': 'Бардык укуктар корголгон.',
};

const tr: Record<TranslationKey, string> = {
  ...ru,
  'nav.menu': 'Menü', 'nav.restaurant': 'Restoran', 'nav.reviews': 'Yorumlar', 'nav.contacts': 'İletişim', 'nav.open': 'Menüyü aç', 'nav.home': 'Usta — ana sayfa', 'nav.primary': 'Ana navigasyon', 'nav.language': 'Dil seçimi',
  'category.new': 'Yeni lezzetler', 'category.newNote': 'Kumpir, börek ve sıcak tostlar', 'category.kids': 'Çocuk menüsü', 'category.kidsNote': 'Küçük misafirler için sevilen tatlar', 'category.desserts': 'Tatlılar', 'category.dessertsNote': 'Baklava, katmer ve özel tatlılar', 'category.drinks': 'İçecekler', 'category.drinksNote': 'Türk çayı, kahve ve limonatalar',
  'home.eyebrow': 'Türk mutfağı · Bişkek', 'home.title': "Doğu'nun gerçek", 'home.titleAccent': 'lezzeti', 'home.heroText': "Ateş, cömertlik ve misafirperverlik. Türk geleneklerinin 2008'den beri yaşadığı restoran.", 'home.viewMenu': 'Menüyü incele', 'home.reserve': 'Rezervasyon', 'home.scroll': 'Aşağı kaydır',
  'home.marqueeTradition': 'Gelenek', 'home.marqueeFire': 'Ateş', 'home.marqueeHospitality': 'Misafirperverlik',
  'gallery.eyebrow': 'Karelerde Usta', 'gallery.title': 'Önce', 'gallery.titleAccent': 'gözlerle', 'gallery.text': "Kaydırın veya okları kullanın. Galeri, Usta'da bir akşam gibi ağır ağır ve her karede yeni bir tatla ilerler.", 'gallery.label': 'Usta galerisi', 'gallery.prev': 'Önceki kare', 'gallery.next': 'Sonraki kare',
  'gallery.s1t': 'Yeni yorum', 'gallery.s1c': 'Bakmaya doyamayacağınız tabaklar', 'gallery.s2t': 'Türk tatlıları', 'gallery.s2c': 'Antep fıstığı, bal ve incecik hamur', 'gallery.s3t': 'Tüm aile için', 'gallery.s3c': 'Büyük porsiyonlar ve sevilen tatlar', 'gallery.s4t': 'Fırından', 'gallery.s4c': 'Çıtır börek ve sıcak tostlar', 'gallery.s5t': 'Son dokunuş', 'gallery.s5c': 'Taze meyveler ve özel tatlılar',
  'week.eyebrow': 'Ekibin seçimi', 'week.title': 'Haftanın', 'week.title2': 'lezzetleri', 'week.all': 'Tüm menü', 'week.label': 'Hafta', 'week.katmerNote': 'Antep fıstığı · ince hamur · dondurma', 'week.kumpirNote': 'Patates · suluguni · baharat', 'week.borekNote': 'Patates · biber · tereyağı',
  'story.badge': 'Canlı ateş. Gerçek lezzet.', 'story.eyebrow': 'Hikâyemiz', 'story.title': 'Hatırlanan', 'story.accent': 'bir yer', 'story.text': "Usta'da her şey insanlarla başlar: ateşin karakterini bilen ustalar ve sevdiği lezzetler için geri dönen misafirler. Modern sunum gelenekle yarışmaz; onun sesini daha güçlü duyurur.", 'story.founded': 'kuruluş yılı', 'story.halal': 'helal', 'story.guests': 'misafirler için',
  'reviews.eyebrow': 'Misafir yorumları · 2GIS', 'reviews.title': 'Bizim için', 'reviews.accent': 'ne dediler', 'reviews.ratings': "2GIS'te\n1800+ puan", 'reviews.r1': "Türkiye atmosferine taşıyan harika bir yer. Çok lezzetli, servis mükemmel.", 'reviews.r2': 'Tüm yemekler lezzetli, atmosfer çok hoş.', 'reviews.r3': 'Her şey çok lezzetli, servis üst düzey.',
  'location.title': 'Doğu şimdi', 'location.accent': 'yakınınızda', 'location.address': 'Bişkek, Aalı Tokombayev Caddesi 25', 'location.hours': 'Her gün 08:00–00:00 arası açığız', 'location.route': 'Yol tarifi', 'location.write': 'Mesaj gönder',
  'menu.eyebrow': 'Lezzetinizi seçin', 'menu.title': 'Menü', 'menu.description': "Beğendiğiniz ürünleri favorilere ekleyin. Listenizi hazırlayıp WhatsApp mesajına dönüştürelim.", 'menu.all': 'Tümü', 'menu.search': 'Yemek ara', 'menu.clear': 'Aramayı temizle', 'menu.favorites': 'Favoriler', 'menu.add': 'Favorilere ekle', 'menu.remove': 'Favorilerden çıkar', 'menu.emptyTitle': 'Sonuç bulunamadı', 'menu.emptyText': 'Başka bir isim veya kategori deneyin.', 'menu.selection': 'Seçiminiz', 'menu.saved': 'Liste bu cihazda kaydedildi.', 'menu.delete': 'Sil', 'menu.send': "Listeyi WhatsApp'tan gönder", 'menu.noFavorites': 'Bir yemeği buraya eklemek için kalbe dokunun.', 'menu.hello': 'Merhaba! Şu ürünlerle ilgileniyorum:', 'menu.question': 'Sipariş verebilir miyim?', 'menu.currency': 'KGS',
  'contacts.eyebrow': "Bizi Bişkek'te bulun", 'contacts.title': 'Sizi her zaman', 'contacts.accent': 'bekliyoruz', 'contacts.addressLabel': 'Adres', 'contacts.address': 'Aalı Tokombayev Caddesi 25', 'contacts.district': 'Oktyabr bölgesi, Bişkek', 'contacts.hoursLabel': 'Çalışma saatleri', 'contacts.daily': 'Her gün', 'contacts.mapTitle': 'Haritada Usta Turkish Restaurant', 'contacts.open2gis': "2GIS'te aç", 'contacts.call': 'Ara', 'contacts.write': 'Yaz', 'contacts.watch': 'Görüntüle',
  'footer.text': "2008'den beri lezzet hikâyesi. Gelenek, ateş ve gerçek Türk misafirperverliği.", 'footer.navigation': 'Navigasyon', 'footer.restaurant': 'Restoran', 'footer.address': 'Aalı Tokombayev Caddesi 25\nBişkek', 'footer.rights': 'Tüm hakları saklıdır.',
};

const dictionaries: Record<Locale, Record<TranslationKey, string>> = { ru, ky, tr };

type I18nContextValue = { locale: Locale; setLocale: (locale: Locale) => void; t: (key: string) => string };
const I18nContext = React.createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, updateLocale] = React.useState<Locale>('ru');

  React.useEffect(() => {
    const saved = localStorage.getItem('usta-locale') as Locale | null;
    if (saved && ['ru', 'ky', 'tr'].includes(saved)) updateLocale(saved);
  }, []);

  React.useEffect(() => { document.documentElement.lang = locale; }, [locale]);

  const setLocale = (next: Locale) => { updateLocale(next); localStorage.setItem('usta-locale', next); };
  const t = React.useCallback((key: string) => dictionaries[locale][key as TranslationKey] ?? key, [locale]);
  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const value = React.useContext(I18nContext);
  if (!value) throw new Error('useI18n must be used within I18nProvider');
  return value;
}
