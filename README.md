# Chef Muslim - React Website

Современный веб-сайт для ресторана Chef Muslim, построенный на React с использованием Vite.

## Возможности

- 🌐 **Многоязычность**: Русский, Азербайджанский, Английский
- 🎨 **Современный дизайн**: Белая цветовая схема с зелеными акцентами
- 📱 **Адаптивный дизайн**: Оптимизирован для всех устройств
- 🤖 **ИИ-помощник**: Интеллектуальный подбор блюд на основе предпочтений
- ⚡ **Быстрая загрузка**: Оптимизированный сборкой через Vite

## Установка и запуск

### Установка зависимостей

```bash
npm install
```

### Запуск в режиме разработки

```bash
npm run dev
```

Сайт будет доступен по адресу: `http://localhost:5173`

### Сборка для продакшена

```bash
npm run build
```

### Предварительный просмотр продакшен сборки

```bash
npm run preview
```

## Структура проекта

```
chef-site/
├── src/
│   ├── components/         # React компоненты
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Menu.jsx
│   │   ├── AIAssistant.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/             # React хуки
│   │   └── useLanguage.js
│   ├── utils/             # Утилиты
│   │   ├── translations.js
│   │   └── menuData.js
│   ├── styles/            # CSS стили
│   │   ├── index.css
│   │   └── App.css
│   ├── App.jsx            # Главный компонент
│   └── main.jsx           # Точка входа
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Добавление меню

Для добавления меню используйте функции в `src/utils/menuData.js`:

```javascript
import { addMenuItems } from './utils/menuData'

// Добавление закусок
addMenuItems('appetizers', [
  {
    id: 1,
    name: 'Салат овощной',
    description: 'Свежие овощи с заправкой',
    price: '250₽',
    category: 'appetizers'
  }
])

// Или установка полного меню
import { setMenuData } from './utils/menuData'

setMenuData({
  appetizers: [...],
  main: [...],
  desserts: [...],
  sets: [...]
})
```

Подробная информация о структуре меню находится в файле `MENU_STRUCTURE.md`.

## Технологии

- React 18
- Vite
- CSS3 (с CSS переменными)
- JavaScript (ES6+)

## Лицензия

© 2024 Chef Muslim. Все права защищены.

