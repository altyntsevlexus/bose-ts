import { useAppSelector } from '../../hooks';
import Title from '../../components/Title';
import styled from './Cart.module.scss';
import CartProduct from '../../components/CartProduct';

const Catalog = () => {
  const cart = useAppSelector((store) => store.cart);

  return (
    <>
      <Title value="Корзина" />
      <div className={styled.products}>
        {cart.map((product) => {
          return <CartProduct key={product.title} product={product} />;
        })}
      </div>
    </>
  );
};

export default Catalog;
