# 🚀 Quick Integration Example

Минимальный пример интеграции прелоадера в ваш проект.

## Полный пример использования

```tsx
// App.tsx или ваш основной компонент
import { useState } from "react";
import { Preloader } from "@/components/Preloader";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
      {/* Прелоадер отображается первым */}
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}

      {/* Ваш контент появляется после завершения */}
      {!showPreloader && (
        <div className="min-h-screen bg-gray-900 text-white">
          <header className="p-6">
            <h1 className="text-4xl font-bold">My Awesome App</h1>
          </header>
          
          <main className="p-6">
            <p>Контент вашего приложения...</p>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
```

## Что нужно скопировать в ваш проект

### 1. Файл компонента
```
client/src/components/Preloader.tsx
```

### 2. Изображения
```
attached_assets/preloader_image-1.png
attached_assets/preloader_image-2.png
attached_assets/preloader_image-3.png
attached_assets/preloader_image-4.png
```

### 3. Стили в index.css

```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&display=swap');

:root {
  --font-display: 'Montserrat', sans-serif;
}

.text-glass-outline {
  color: rgba(0, 0, 0, 0.2);
  -webkit-text-stroke: 2px white;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

@media (max-width: 640px) {
  .text-glass-outline {
    -webkit-text-stroke: 1px white;
  }
}
```

### 4. Установите зависимость

```bash
npm install framer-motion
```

## Готово! 🎉

Запустите `npm run dev` и наслаждайтесь анимацией.

Полная документация в **README.md**.
