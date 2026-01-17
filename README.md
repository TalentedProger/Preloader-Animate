# 🎬 Animated Preloader Component

Профессиональный анимированный прелоадер с 4 этапами, плавными переходами и "стеклянным" эффектом текста. Построен на **React + Framer Motion + TypeScript**.

![Preloader Demo](https://img.shields.io/badge/Status-Production%20Ready-success)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![React](https://img.shields.io/badge/React-18.3-61dafb)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.18-ff69b4)

---

## ✨ Возможности

- ✅ **4 этапа анимации** с уникальными направлениями движения (left, bottom, right, top)
- ✅ **Прогресс-бар** с процентным отображением (0-100%)
- ✅ **Стеклянный эффект текста** с градиентной заливкой
- ✅ **Плавный зум изображений** при появлении
- ✅ **Полностью responsive** дизайн
- ✅ **TypeScript** типизация
- ✅ **Кастомизируемые** изображения, тексты, шрифты и длительность

---

## 🚀 Быстрый старт

### 1. Локальный запуск демо

```bash
# Установите зависимости
npm install

# Запустите dev-сервер
npm run dev
```

Откройте [http://localhost:5000](http://localhost:5000) в браузере.

---

## 📦 Интеграция в ваш проект

### Шаг 1: Скопируйте файлы

Скопируйте в ваш проект:

```
client/src/components/Preloader.tsx  → ваш_проект/src/components/Preloader.tsx
attached_assets/                     → ваш_проект/src/assets/
```

### Шаг 2: Установите зависимости

```bash
npm install framer-motion
```

Убедитесь, что у вас установлены:
- `react` >= 18.0.0
- `react-dom` >= 18.0.0
- `tailwindcss` >= 3.0.0

### Шаг 3: Используйте компонент

```tsx
import { useState } from "react";
import { Preloader } from "@/components/Preloader";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}

      {!showPreloader && (
        <div>
          {/* Ваш основной контент */}
          <h1>Welcome to your app!</h1>
        </div>
      )}
    </>
  );
}

export default App;
```

### Шаг 4: Добавьте стили (ВАЖНО!)

Скопируйте эти стили в ваш `index.css` или глобальный CSS файл:

```css
/* Шрифты для прелоадера */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&display=swap');

:root {
  --font-display: 'Montserrat', sans-serif;
  --font-body: 'Montserrat', sans-serif;
}

/* Стеклянный эффект текста */
.text-glass-outline {
  color: rgba(0, 0, 0, 0.2);
  -webkit-text-stroke: 2px white;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

/* Для мобильных устройств */
@media (max-width: 640px) {
  .text-glass-outline {
    -webkit-text-stroke: 1px white;
  }
}
```

### Шаг 5: Настройте пути импорта

Если вы используете алиасы путей, добавьте в `vite.config.ts` или `tsconfig.json`:

```typescript
// vite.config.ts
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
});
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@assets/*": ["./src/assets/*"]
    }
  }
}
```

---

## 🎨 Кастомизация

### 1. Замена изображений

Замените файлы в папке `attached_assets/` (или вашей папке ассетов):

```
preloader_image-1.png  → ваше_изображение_1.png
preloader_image-2.png  → ваше_изображение_2.png
preloader_image-3.png  → ваше_изображение_3.png
preloader_image-4.png  → ваше_изображение_4.png
```

Затем обновите импорты в `Preloader.tsx`:

```tsx
// В начале файла Preloader.tsx
import imgExplore from "@assets/ваше_изображение_1.png";
import imgExperience from "@assets/ваше_изображение_2.png";
import imgComfort from "@assets/ваше_изображение_3.png";
import imgConfidence from "@assets/ваше_изображение_4.png";
```

**Рекомендации по изображениям:**
- Формат: JPG или PNG
- Разрешение: минимум 1920x1080px
- Соотношение сторон: 16:9 или близкое к нему
- Размер файла: не более 500KB (используйте сжатие)

### 2. Изменение текстов этапов

Найдите массив `steps` в файле `Preloader.tsx`:

```tsx
const steps = [
  {
    id: 1,
    text: "ВАШЕ СЛОВО 1",  // ← Измените здесь
    image: imgExplore,
    direction: "left",
  },
  {
    id: 2,
    text: "ВАШЕ СЛОВО 2",  // ← Измените здесь
    image: imgExperience,
    direction: "bottom",
  },
  // ... и так далее
];
```

### 3. Изменение длительности прелоадера

В `Preloader.tsx` найдите строку:

```tsx
const totalDuration = 3750; // ← Измените длительность в миллисекундах
```

- `3750` = 3.75 секунд (по умолчанию)
- `5000` = 5 секунд (длиннее)
- `2000` = 2 секунды (быстрее)

### 4. Изменение направлений анимации

Каждый этап может двигаться с разных сторон:

```tsx
const steps = [
  {
    id: 1,
    text: "EXPLORE",
    image: imgExplore,
    direction: "left",    // left, right, top, bottom
  },
  // ...
];
```

Доступные направления:
- `"left"` - слева направо
- `"right"` - справа налево
- `"top"` - сверху вниз
- `"bottom"` - снизу вверх

### 5. Смена шрифтов

**Вариант A: Использовать Google Fonts**

В `index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=ВАШ_ШРИФТ:wght@400;700;900&display=swap');

:root {
  --font-display: 'ВАШ_ШРИФТ', sans-serif;
}
```

**Вариант B: Локальные шрифты**

1. Поместите файлы шрифтов в `src/assets/fonts/`
2. В `index.css`:

```css
@font-face {
  font-family: 'MyCoolFont';
  src: url('@assets/fonts/MyCoolFont.woff2') format('woff2');
  font-weight: 900;
}

:root {
  --font-display: 'MyCoolFont', sans-serif;
}
```

### 6. Изменение цветов

Градиент прогресс-бара находится в инлайн-стилях:

```tsx
// В Preloader.tsx, строка ~157
backgroundImage: `linear-gradient(to top, white ${percentage}, transparent ${percentage})`
```

Замените `white` на любой цвет:
```tsx
backgroundImage: `linear-gradient(to top, #FF6B6B ${percentage}, transparent ${percentage})`
```

---

## 🛠️ Расширенная кастомизация

### Добавление событий аналитики

```tsx
export function Preloader({ onComplete }: PreloaderProps) {
  const [currentStep, setCurrentStep] = useState(0);
  
  useEffect(() => {
    // Отправка события при смене шага
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'preloader_step', {
        step: currentStep + 1
      });
    }
  }, [currentStep]);
  
  // ... остальной код
}
```

### Динамическая загрузка данных

```tsx
export function Preloader({ onComplete }: PreloaderProps) {
  const [dataLoaded, setDataLoaded] = useState(false);
  
  useEffect(() => {
    // Загрузка критичных данных
    Promise.all([
      fetch('/api/config').then(r => r.json()),
      fetch('/api/user').then(r => r.json()),
    ]).then(() => {
      setDataLoaded(true);
    });
  }, []);
  
  useEffect(() => {
    // Завершаем прелоадер только когда анимация И данные готовы
    if (progress >= 100 && dataLoaded) {
      onComplete();
    }
  }, [progress, dataLoaded, onComplete]);
  
  // ... остальной код
}
```

### Добавление кнопки "Пропустить"

```tsx
export function Preloader({ onComplete }: PreloaderProps) {
  // ... существующий код
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Существующий код прелоадера */}
      
      {/* Кнопка Skip */}
      <button
        onClick={onComplete}
        className="absolute top-8 right-8 z-[100] px-6 py-2 text-sm uppercase tracking-widest border border-white/20 hover:bg-white hover:text-black transition-all"
      >
        Skip
      </button>
      
      {/* ... остальной JSX */}
    </div>
  );
}
```

---

## 📱 Адаптивность

Компонент автоматически адаптируется под разные размеры экранов:

- **Десктоп**: Текст 12rem (192px)
- **Планшет**: Текст 8rem (128px)
- **Мобильный**: Текст 6rem (96px)

Размеры процента:
- **Десктоп**: 9rem (144px)
- **Мобильный**: 6rem (96px)

---

## 🎯 Примеры использования

### В Next.js проекте

```tsx
// app/layout.tsx или pages/_app.tsx
'use client';

import { useState, useEffect } from 'react';
import { Preloader } from '@/components/Preloader';

export default function RootLayout({ children }) {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <html lang="en">
      <body>
        {showPreloader && (
          <Preloader onComplete={() => setShowPreloader(false)} />
        )}
        {!showPreloader && children}
      </body>
    </html>
  );
}
```

### В Gatsby проекте

```tsx
// gatsby-browser.js
export const wrapPageElement = ({ element }) => {
  return <PreloaderWrapper>{element}</PreloaderWrapper>;
};

// components/PreloaderWrapper.tsx
import { useState } from 'react';
import { Preloader } from './Preloader';

export function PreloaderWrapper({ children }) {
  const [showPreloader, setShowPreloader] = useState(true);
  
  return (
    <>
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}
      {!showPreloader && children}
    </>
  );
}
```

### С React Router

```tsx
// App.tsx
function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}
      
      {!showPreloader && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}
```

---

## 🔧 Требования

### Минимальные версии

- **Node.js**: >= 18.0.0
- **React**: >= 18.0.0
- **React DOM**: >= 18.0.0
- **Framer Motion**: >= 10.0.0
- **Tailwind CSS**: >= 3.0.0

### Размер бандла

- Компонент: ~8KB (gzipped)
- Framer Motion: ~35KB (gzipped)
- Общий размер: ~43KB (с зависимостями)

---

## 📄 Структура файлов

```
preloader-animate/
├── client/
│   └── src/
│       ├── components/
│       │   └── Preloader.tsx        ← Основной компонент
│       ├── pages/
│       │   └── Home.tsx             ← Пример использования
│       ├── App.tsx                  ← Точка входа React
│       └── index.css                ← Стили (включая .text-glass-outline)
├── attached_assets/                 ← Изображения для прелоадера
│   ├── preloader_image-1.png
│   ├── preloader_image-2.png
│   ├── preloader_image-3.png
│   └── preloader_image-4.png
├── package.json
└── README.md                        ← Этот файл
```

---

## 💡 Советы и лучшие практики

### 1. Оптимизация производительности

```tsx
// Предзагрузка изображений
const steps = [
  { id: 1, text: "EXPLORE", image: imgExplore, direction: "left" },
  // ...
];

// Скрытый div для принудительной предзагрузки
<div className="hidden">
  {steps.map(s => <img key={s.id} src={s.image} alt="" />)}
</div>
```

### 2. Accessibility (A11y)

```tsx
// Добавьте поддержку prefers-reduced-motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const imageVariants = {
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: prefersReducedMotion ? 0.1 : 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
```

### 3. SEO для публичных сайтов

Прелоадер блокирует рендеринг контента. Для SEO:

```tsx
// Показывайте прелоадер только при первом визите
const [showPreloader, setShowPreloader] = useState(() => {
  const hasVisited = sessionStorage.getItem('hasVisited');
  return !hasVisited;
});

const handleComplete = () => {
  sessionStorage.setItem('hasVisited', 'true');
  setShowPreloader(false);
};
```

---

## 🐛 Troubleshooting

### Проблема: Изображения не загружаются

**Решение**: Проверьте пути импорта и алиасы:

```typescript
// vite.config.ts
resolve: {
  alias: {
    "@assets": path.resolve(__dirname, "./attached_assets"),
  },
}
```

### Проблема: Стили не применяются

**Решение**: Убедитесь, что:
1. Tailwind CSS настроен правильно
2. CSS класс `.text-glass-outline` добавлен в глобальные стили
3. Шрифты загружены (проверьте в DevTools → Network)

### Проблема: Анимация прерывается

**Решение**: Проверьте, что `AnimatePresence` используется правильно:

```tsx
<AnimatePresence mode="wait">
  <motion.div key={currentStep}>
    {/* ... */}
  </motion.div>
</AnimatePresence>
```

### Проблема: TypeScript ошибки

**Решение**: Установите типы:

```bash
npm install --save-dev @types/react @types/react-dom
```

---

## 📝 Лицензия

MIT License - свободно используйте в коммерческих и личных проектах.

---

## 🙌 Поддержка

Если у вас возникли вопросы или нужна помощь с интеграцией:

1. Проверьте раздел **Troubleshooting** выше
2. Изучите примеры в `client/src/pages/Home.tsx`
3. Убедитесь, что все зависимости установлены (`npm install`)

---

## 🎉 Готово!

Ваш профессиональный прелоадер готов к использованию. Наслаждайтесь плавными анимациями! ✨

**Быстрый чеклист перед запуском:**
- [ ] Скопировали `Preloader.tsx` и изображения
- [ ] Установили `framer-motion`
- [ ] Добавили стили `.text-glass-outline` в CSS
- [ ] Настроили алиасы путей
- [ ] Запустили `npm run dev` и проверили работу

**Happy coding!** 🚀
