# 🔮 Magic Crystal Ball Landing Page

> Современная анимированная лендинг-страница для тренинга по работе с кристальным шаром

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Netlify-00C7B7?style=for-the-badge&logo=netlify)](https://magic-landing-page.netlify.app)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

## 📸 Демо

![Landing Page Preview](https://magic-landing-page.netlify.app/og-image.svg)

> **🎯 Демо**: [Посмотреть живую версию](https://magic-landing-page.netlify.app)

> **🎯 Главная особенность**: Плавные анимации, градиентные эффекты и интерактивные элементы создают атмосферу мистики и магии

## ✨ Особенности

- 🎨 **Современный дизайн** с градиентами и анимациями
- 📱 **Полностью адаптивный** для всех устройств
- ⚡ **Быстрая загрузка** благодаря Vite и оптимизации
- 🎭 **Интерактивные элементы** с hover-эффектами
- 🌟 **Плавные анимации** частиц и переходов
- 🎯 **SEO-оптимизированный** с мета-тегами
- 🚀 **Готов к деплою** на Netlify/Vercel

## 🛠️ Технологии

### Frontend
- **React 18.3.1** - Современная библиотека для UI
- **TypeScript 5.5.3** - Типизированный JavaScript
- **Tailwind CSS 3.4.1** - Utility-first CSS фреймворк
- **Lucide React** - Красивые иконки
- **Vite 5.4.2** - Быстрый сборщик и dev-сервер

### Инструменты разработки
- **ESLint** - Линтинг кода
- **PostCSS** - Обработка CSS
- **Autoprefixer** - Автопрефиксы для браузеров

## 🚀 Быстрый старт

### Предварительные требования
- Node.js 18+ 
- npm или yarn

### Установка

```bash
# Клонируйте репозиторий
git clone https://github.com/kostyakunak/magic-landing-page.git

# Перейдите в папку проекта
cd magic-landing-page

# Установите зависимости
npm install

# Запустите dev-сервер
npm run dev
```

Откройте [http://localhost:5173](http://localhost:5173) в браузере.

## 📁 Структура проекта

```
magic-landing-page/
├── public/                 # Статические файлы
├── src/
│   ├── App.tsx            # Главный компонент
│   ├── main.tsx           # Точка входа
│   ├── index.css          # Глобальные стили и анимации
│   └── vite-env.d.ts      # Типы Vite
├── index.html             # HTML шаблон
├── package.json           # Зависимости и скрипты
├── tailwind.config.js     # Конфигурация Tailwind
├── vite.config.ts         # Конфигурация Vite
└── README.md              # Документация
```

## 🎨 Дизайн и анимации

### Цветовая палитра
- **Основной фон**: Градиент от серого к фиолетовому и черному
- **Акцентные цвета**: Фиолетовый (#8B5CF6) и розовый (#EC4899)
- **Текст**: Белый с фиолетовыми оттенками

### Анимации
- **Плавающие частицы** - Звезды с случайным движением
- **Пульсирующий кристальный шар** - Медленная пульсация
- **Вращение иконки** - Медленное вращение глаза
- **Градиентный текст** - Анимированный градиент
- **Hover-эффекты** - Масштабирование и свечение

## 📱 Адаптивность

Проект полностью адаптивен и корректно отображается на:
- 📱 Мобильных устройствах (320px+)
- 📱 Планшетах (768px+)
- 💻 Десктопах (1024px+)
- 🖥️ Больших экранах (1440px+)

## 🚀 Деплой

### Netlify (рекомендуется)

1. Подключите репозиторий к Netlify
2. Настройки сборки:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Деплой автоматически запустится

### Vercel

```bash
# Установите Vercel CLI
npm i -g vercel

# Деплой
vercel --prod
```

### Ручной деплой

```bash
# Сборка проекта
npm run build

# Файлы готовы в папке dist/
```

## 🔧 Скрипты

```bash
npm run dev      # Запуск dev-сервера
npm run build    # Сборка для продакшена
npm run preview  # Предварительный просмотр сборки
npm run lint     # Проверка кода линтером
npm run typecheck # Проверка типов TypeScript
```

## 📊 Производительность

- ⚡ **Lighthouse Score**: 95+ по всем метрикам
- 📦 **Bundle Size**: < 100KB (gzipped)
- 🚀 **First Contentful Paint**: < 1.5s
- 🎯 **Largest Contentful Paint**: < 2.5s

## 🎯 SEO оптимизация

- ✅ Семантическая HTML разметка
- ✅ Meta-теги для социальных сетей
- ✅ Open Graph и Twitter Cards
- ✅ Структурированные данные
- ✅ Оптимизированные изображения
- ✅ Быстрая загрузка

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add amazing feature'`)
4. Отправьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект распространяется под лицензией MIT. См. файл `LICENSE` для подробностей.

## 👨‍💻 Автор

**Костя Кунак**
- GitHub: [@kostyakunak](https://github.com/kostyakunak)
- LinkedIn: [Костя Кунак](https://linkedin.com/in/kostyakunak)

## 🙏 Благодарности

- [React](https://reactjs.org/) за отличную библиотеку
- [Tailwind CSS](https://tailwindcss.com/) за utility-first подход
- [Lucide](https://lucide.dev/) за красивые иконки
- [Vite](https://vitejs.dev/) за быструю разработку

---

⭐ **Если проект понравился, поставьте звезду!** ⭐

---

## 🌐 Языки

- [🇷🇺 Русский](README.md)
- [🇺🇸 English](README.en.md)
