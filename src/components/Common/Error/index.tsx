import React from 'react';
import { Text } from 'components/Common';

type ErrorProps = {
  type?: 'fetch' | 'noData';
};

export const Error = ({ type = 'fetch' }: ErrorProps) => {
  switch (type) {
    case 'fetch':
      return <Text>There is error while fetching data</Text>;
  }
};
