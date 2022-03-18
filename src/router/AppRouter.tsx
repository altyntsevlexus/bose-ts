import { Routes, Route, Navigate } from 'react-router-dom';
import Categories from '../pages/Categories';
import SingleProduct from '../pages/SingleProduct';
import Products from '../pages/Catalog';
import Cart from '../pages/Cart';

const ROUTER_CONFIG = [
  { path: '/categories', element: <Categories /> },
  { path: '/categories/:category', element: <Products /> },
  { path: '/categories/:category/:id', element: <SingleProduct /> },
  { path: '/cart', element: <Cart /> },
  { path: '*', element: <Navigate to="/404" /> },
];

const AppRouter = () => {
  return (
    <main className="wrapper">
      <Routes>
        <Route path="/" element={<Navigate to="/categories" />} />
        {ROUTER_CONFIG.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </main>
  );
};

export default AppRouter;
