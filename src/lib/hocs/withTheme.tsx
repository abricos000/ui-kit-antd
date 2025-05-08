// import React from 'react';
// import { ConfigProvider } from 'antd';
// import hoistNonReactStatics from 'hoist-non-react-statics';
// import { defaultTheme } from '../theme/config';

// export const withTheme = <T extends React.ComponentType<any>>(
//   Component: T
// ): T & { [K in keyof T]: T[K] } => {
//   const WrappedComponent: React.FC<React.ComponentProps<T>> = (props) => (
//     <ConfigProvider theme={defaultTheme}>
//       <Component {...props} />
//     </ConfigProvider>
//   );

//   // Копируем все статичные свойства
//   const ResultComponent = hoistNonReactStatics(WrappedComponent, Component);

//   // Особый случай: обрабатываем вложенные компоненты (например, Dropdown.Button)
//   // Перебираем все статичные свойства и оборачиваем их в ConfigProvider
//   for (const key in Component) {
//     if (typeof Component[key] === 'function' || typeof Component[key] === 'object') {
//       (ResultComponent as any)[key] = withTheme((Component as any)[key]);
//     }
//   }

//   return ResultComponent as T;
// };

import React from 'react';
import { ConfigProvider } from 'antd';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { defaultTheme } from '../theme/config';

export const withTheme = <T extends React.ComponentType<any>>(
  Component: T
): React.FC<React.ComponentProps<T>> & Pick<T, keyof T> => {
  const WrappedComponent: React.FC<React.ComponentProps<T>> = (props) => (
    <ConfigProvider theme={defaultTheme}>
      <Component {...props} />
    </ConfigProvider>
  );

  // Копируем статические свойства
  const ResultComponent = hoistNonReactStatics(WrappedComponent, Component);

  // Обрабатываем вложенные компоненты (например, Checkbox.Group)
  // Проверяем, что свойство существует и является React-компонентом
  Object.keys(Component).forEach((key) => {
    const nestedComponent = (Component as any)[key];
    if (
      nestedComponent &&
      (typeof nestedComponent === 'function' || React.isValidElement(nestedComponent))
    ) {
      (ResultComponent as any)[key] = withTheme(nestedComponent);
    } else {
      // Если это не компонент, просто копируем значение
      (ResultComponent as any)[key] = nestedComponent;
    }
  });

  return ResultComponent as React.FC<React.ComponentProps<T>> & Pick<T, keyof T>;
};