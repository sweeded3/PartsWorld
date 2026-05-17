export const navItems = [
  { href: '#catalog', label: 'Каталог' },
  { href: '#benefits', label: 'Преимущества' },
  { href: '#promo', label: 'Акции' },
  { href: '#contacts', label: 'Контакты' },
];

export const brands = [
  'Valeo', 'Sachs', 'Luk', 'Ina', 'Bosch', 'Brembo', 'Fag', 'Febi',
  'Kolbenschmidt', 'Lemforder', 'Denso', 'Delphi', 'Mann-Filter', 'Mahle',
  'Hengst', 'Filtron', 'NGK', 'ZF', 'TRW', 'Hella'
];

export const categories = [
  {
    title: 'Легковые автомобили',
    icon: 'fa-car-side',
    items: ['Двигатели и компоненты', 'Трансмиссия', 'Тормозная система', 'Подвеска', 'Электрооборудование'],
  },
  {
    title: 'Грузовой и коммерческий транспорт',
    icon: 'fa-truck-moving',
    items: ['Дизельные двигатели', 'Коробки передач', 'Мосты и подвеска', 'Гидравлика', 'Запчасти для автобусов'],
  },
  {
    title: 'Спецтехника',
    icon: 'fa-tractor',
    items: ['Запчасти для экскаваторов', 'Компоненты бульдозеров', 'Сельхозтехника', 'Складская техника'],
  },
];

export const benefits = [
  {
    title: 'Подбор по VIN',
    text: 'Сверяем совместимость до заказа, чтобы клиент получал нужную деталь без лишних возвратов.',
    icon: 'fa-barcode',
  },
  {
    title: 'Европейские поставщики',
    text: 'Работаем с проверенными брендами и понятной логистикой от склада до Кыргызстана.',
    icon: 'fa-warehouse',
  },
  {
    title: 'Опт и розница',
    text: 'Подходит для частных клиентов, СТО, магазинов и регулярных корпоративных закупок.',
    icon: 'fa-boxes-stacked',
  },
];

export const promos = [
  {
    badge: 'Подарок',
    title: 'Масло Magnum в подарок',
    text: 'При покупке двигателя - моторное масло Magnum 5W-40 в подарок.',
    note: 'Акция действует до 30.11.2026',
    icon: 'fa-gift',
  },
  {
    badge: 'Бонус',
    title: 'Приведи друга',
    text: '10% от первого заказа нового клиента возвращается на ваш бонусный счет.',
    note: 'Ограниченное предложение',
    icon: 'fa-handshake',
  },
  {
    badge: 'Опт',
    title: 'Оптовые поставки',
    text: 'Для крупных партий доступны индивидуальные условия и скидки до 25%.',
    note: 'Расчет по заявке',
    icon: 'fa-box-open',
  },
];

export const contacts = {
  address: 'Кыргызская республика, г. Бишкек, Первомайский р-н, ул. Махатмы Ганди, д. 171, кв. 4',
  phone: '+996 221 070 666',
  email: 'partsworldkz@yandex.ru',
  schedule: 'Пн-Пт: 9:00-18:00, Сб: 10:00-15:00, Вс: выходной',
};
