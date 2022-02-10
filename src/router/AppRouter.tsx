import { Routes, Route, Navigate } from 'react-router-dom';
import Category from '../components/Category';
import Products from '../pages/Products/Products';

const ROUTER_CONFIG = [
  { path: '/category/:category', component: Products },
  { path: '/categories', component: Category },
];

const AppRouter = () => {
  return (
    <main className="wrapper">
      <Routes>
        <Route path="/" element={<Navigate to="/category/headphones" />} />
        {ROUTER_CONFIG.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
        <Route path="*" element={<Navigate to="/category/headphones" />} />
      </Routes>
    </main>
  );
};

export default AppRouter;
