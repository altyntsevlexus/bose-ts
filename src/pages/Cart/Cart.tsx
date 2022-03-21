import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { empty } from '../../redux/cartSlice';
import Title from '../../components/Title';
import styled from './Cart.module.scss';
import CartProduct from '../../components/CartProduct';
import Button from '../../components/Button';

const Catalog = () => {
  const cart = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const overall = cart.reduce(
    (initValue, item) => initValue + item.price * item.quantity,
    0,
  );

  const handleOrder = () => {
    alert('Заказ успешно оформлен');
    navigate('/');
    dispatch(empty());
  };

  if (cart.length > 0) {
    return (
      <>
        <Title value="Корзина" />

        <div className={styled.cart}>
          {cart.map((product) => {
            return (
              <CartProduct
                key={product.productId + product.color}
                product={product}
              />
            );
          })}
          <div className={styled.cart__overall}>
            <p>
              Стоимость заказа:{' '}
              <span className={styled.cart__amount}>{overall}</span>
            </p>
          </div>
          <Button value="Оформить заказ" handleClick={handleOrder} />
        </div>
      </>
    );
  }

  return (
    <>
      {' '}
      <Title value="Корзина пустая :(" />
      <div className={styled.cart}>
        <Link to="/">
          <Button value="На главную" />
        </Link>
      </div>
    </>
  );
};

export default Catalog;
