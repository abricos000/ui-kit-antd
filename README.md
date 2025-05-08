# UI Kit Foundation (Ant Design 5.11.0)

**Базовая заготовка для кастомизированного UI-кита** на основе Ant Design.  
Все компоненты автоматически оборачиваются в `ConfigProvider` с дефолтной темой.

```bash
npm install ui-kit-custom-antd-v2
```

## 🏗️ Архитектура
1. Реэкспорт + Theme Injection
    Каждый компонент Ant Design реэкспортируется с применением темы:

```js
// Реализация в вашей библиотеке:
import { Button } from 'antd';
export default withTheme(Button); // Автоматическая обертка в ConfigProvider
```
2. Система тем
    defaultTheme — базовая тема (изначально пустая, только для модификации)

Все изменения только через правку defaultTheme

## 🎨 Кастомизация (для разработчиков UIKIT)

**Шаг 1. Изменение defaultTheme**

Отредактируйте базовые токены в теме:
```ts
// src/theme/defaultTheme.ts
import { ThemeConfig } from 'antd';

export const defaultTheme: ThemeConfig = {
  token: {
    colorPrimary: '#FF5722',      // Основной цвет
    borderRadius: 4,             // Глобальный радиус
    fontFamily: 'Inter, sans-serif', // Шрифт
  },
  components: {
    Button: {
      colorPrimary: '#4CAF50',   // Компонентный переопределение
    }
  }
};
```

**Шаг 2. Глубокая стилизация**
Если токенов Ant Design недостаточно, используйте styled-components:

Вариант 1: Стилизация через styled()
```tsx
// Пример для кастомного Button
import { Button as AntdButton } from 'antd';
import styled from 'styled-components';

export const Button = styled(AntdButton)`
  && {
    font-weight: 600;
    transition: transform 0.2s;
    
    &:hover {
      transform: translateY(-2px);
    }
    
    &.ant-btn-primary {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
`;
```

Вариант 2: Глобальные стили (если необходимо)
```scss
// styles/antd-overrides.scss
:where(.ant-btn) {
  &-custom {
    border: 2px dashed currentColor;
  }
}
```

## 📦 Доступные компоненты
Полный список компонентов Ant Design 5.11.0:

Формы: `Button`, `Input`, `Select`, `Checkbox`, `Radio`, `Switch`

Навигация: `Menu`, `Dropdown`, `Steps`

Данные: `Table`, `Tag`, `Tooltip`, `Modal`

и другие ([см. документацию Ant Design]('https://ant.design/components/overview'))

## ⚠️ Важные ограничения

Для совместимости обязательно к каждому компоненту и истории добавлять 

```js
import React from "react";
```

Не создавайте новые темы — только модификация defaultTheme

Для сложных случаев — оборачивайте компоненты в styled()

## ▶️ Пример использования
```jsx
import { Button, Input } from '@your-company/ui-foundation';

function App() {
  return (
    <>
      <Button type="primary">Кнопка с темой</Button>
      <Input placeholder="Кастомизированный инпут" />
    </>
  );
}
```

## 🤝 Разработка

Установите зависимости:
```bash
npm install
```

Запустите Storybook:
```bash
npm run storybook
```