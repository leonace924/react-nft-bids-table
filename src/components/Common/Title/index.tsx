import React, { forwardRef, type HTMLProps } from 'react';

import { View } from '../View';

type TitleProps = HTMLProps<HTMLHeadingElement> & {
  as?: 'h1' | 'h2' | 'h3';
};

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ as = 'h1', className, ...props }: TitleProps, ref) => {
    const Component = as;

    return (
      <View className={className}>
        <Component ref={ref} {...props} />
      </View>
    );
  }
);
