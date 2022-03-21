import { Routes, Route, Navigate } from 'react-router-dom';
import Categories from '../pages/Categories';
import SingleProduct from '../pages/SingleProduct';
import Products from '../pages/Catalog';
import Cart from '../pages/Cart';
import Title from '../components/Title';
import Login from '../pages/Login';
import { useAppSelector } from '../hooks';

const ROUTER_CONFIG = [
  { path: '/', element: <Navigate to="/categories" /> },
  { path: '/404', element: <Title value="404" /> },
  { path: '*', element: <Navigate to="/404" /> },
];

const PRIVATE_ROUTE_CONFIG = [
  { path: '/categories', element: <Categories /> },
  { path: '/categories/:category', element: <Products /> },
  { path: '/categories/:category/:id', element: <SingleProduct /> },
  { path: '/cart', element: <Cart /> },
];

const AppRouter = () => {
  const token = useAppSelector((store) => store.user.data.jwt);

  return (
    <main className="wrapper">
      <Routes>
        {ROUTER_CONFIG.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        {PRIVATE_ROUTE_CONFIG.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={token ? route.element : <Navigate to="/login" />}
          />
        ))}
        <Route
          path="/login"
          element={token ? <Navigate to="/categories" /> : <Login />}
        />
      </Routes>
    </main>
  );
};

export default AppRouter;
