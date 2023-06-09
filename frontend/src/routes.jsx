import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import BasePage from './pages/BasePage';
import ShippingPage from './pages/ShippingPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<HomePage />} exact />
          <Route path="/login" element={<LoginPage />} exact />
          <Route path="/login/shipping" element={<ShippingPage />} exact />
          <Route path="/register" element={<RegisterPage />} exact />
          <Route path="/product/:id" element={<ProductPage />} exact />
          <Route path="/cart/:id?" element={<CartPage />} exact />
          <Route path="/profile" element={<ProfilePage />} exact />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
