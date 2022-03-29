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

  const overall = cart
    .reduce((initValue, item) => initValue + item.price * item.quantity, 0)
    .toLocaleString()
    .replace(/,/g, ' ');

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
            <span>Стоимость заказа:</span>
            <span className={styled.cart__amount}>
              {overall.toLocaleString()} грн.
            </span>
            <Button
              value="Оформить заказ"
              handleClick={handleOrder}
              color="dark"
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
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
