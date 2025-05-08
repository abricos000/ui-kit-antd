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

  const ResultComponent = hoistNonReactStatics(WrappedComponent, Component);

  Object.keys(Component).forEach((key) => {
    const nestedComponent = (Component as any)[key];
    if (
      nestedComponent &&
      (typeof nestedComponent === 'function' || React.isValidElement(nestedComponent))
    ) {
      (ResultComponent as any)[key] = withTheme(nestedComponent);
    } else {
      (ResultComponent as any)[key] = nestedComponent;
    }
  });

  return ResultComponent as React.FC<React.ComponentProps<T>> & Pick<T, keyof T>;
};