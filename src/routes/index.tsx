import React from 'react';
import { Layout } from 'components/Common';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('pages/Home'));
const Page404 = React.lazy(() => import('pages/404'));

export const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Layout>
  );
};
