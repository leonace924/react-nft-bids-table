import React from 'react';
import { getDefaultProvider } from 'ethers';
import { NftProvider } from 'use-nft';

import { AppRoutes } from 'routes';
import { Loading } from 'components/Common';

import 'styles/index.css';

const ethersConfig = {
  provider: getDefaultProvider('homestead'),
};

function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <NftProvider fetcher={['ethers', ethersConfig]}>
        <AppRoutes />
      </NftProvider>
    </React.Suspense>
  );
}

export default App;
