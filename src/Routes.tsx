import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Error404 } from './pages';
import { Loader } from './components/shared';
import Layout from './components/Layout';

const CategoryView = React.lazy(() => import('./pages/CategoryView'));
const BrandView = React.lazy(() => import('./pages/BrandView'));
const ProductView = React.lazy(() => import('./pages/ProductView'));

const AppWithRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout component={<Home />} />} />
      <Route
        path="/category/:cn"
        element={
          <Suspense fallback={<Loader fullscreen />}>
            <Layout component={<CategoryView />} />
          </Suspense>
        }
      />
      <Route
        path="/brand/:bn"
        element={
          <Suspense fallback={<Loader fullscreen />}>
            <Layout component={<BrandView />} />
          </Suspense>
        }
      />
      <Route
        path="/prn/:name/prid/:id"
        element={
          <Suspense fallback={<Loader fullscreen />}>
            <Layout component={<ProductView />} />
          </Suspense>
        }
      />
      <Route
        path="/not-found"
        element={<Layout noFooter={true} component={<Error404 />} />}
      />
      <Route
        path="*"
        element={<Layout noFooter={true} component={<Error404 />} />}
      />
    </Routes>
  );
};

export default AppWithRouting;
