import React from 'react';
import { AppRoutes } from 'routes';
import { Loading } from 'components/Common';
import 'styles/index.css';

function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <AppRoutes />
    </React.Suspense>
  );
}

export default App;
