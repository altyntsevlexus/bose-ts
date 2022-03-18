import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import Title from '../../components/Title';
import styled from './Cart.module.scss';
import CartProduct from '../../components/CartProduct';
import Button from '../../components/Button';

const Catalog = () => {
  const cart = useAppSelector((store) => store.cart);

  if (cart.length > 0) {
    return (
      <div className={styled.cart}>
        <Title value="Корзина" />

        <div className={styled.cart__products}>
          {cart.map((product) => {
            return (
              <CartProduct
                key={product.productId + product.color}
                product={product}
              />
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={styled.cart}>
      <div className={styled.cart__empty}>
        <Title value="Корзина пустая :(" />
        <Link to="/">
          <Button value="На главную" />
        </Link>
      </div>
    </div>
  );
};

export default Catalog;
