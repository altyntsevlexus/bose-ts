import { useAppDispatch } from '../../hooks';
import { increment, decrement, delItem } from '../../redux/cartSlice';
import { CartProductType } from '../../types';
import arrow from '../../images/arrow-min.svg';

import styled from './CartProduct.module.scss';

type CartProductProps = {
  product: CartProductType;
};

const CartProduct = ({ product }: CartProductProps) => {
  const dispatch = useAppDispatch();
  const sum = product.price * product.quantity;

  return (
    <div className={styled.cartProduct}>
      <div className={styled.cartProduct__image}>
        <img src={product.image} alt="product" />
      </div>
      <div className={styled.cartProduct__info}>
        <div className={styled.cartProduct__header}>
          <p className={styled.cartProduct__title}>{product.title}</p>
          <button
            type="button"
            onClick={() => dispatch(delItem(product))}
            className={styled.cartProduct__button}
          >
            X
          </button>
        </div>
        <div className={styled.cartProduct__footer}>
          <div className={styled.cartProduct__details}>
            <p className={styled.cartProduct__color}>
              Цвет: <b>{product.color}</b>
            </p>
            <p>
              Цена: <b>{product.price}</b>
            </p>
            <div className={styled.cartProduct__counter}>
              <p>
                Количество: <b>{product.quantity}</b>
              </p>
              <div className={styled.cartProduct__arrows}>
                <button
                  type="button"
                  onClick={() => dispatch(decrement(product))}
                  className={styled.cartProduct__button}
                  disabled={product.quantity === 1}
                >
                  <img src={arrow} alt="dec" />
                </button>
                <button
                  type="button"
                  onClick={() => dispatch(increment(product))}
                  className={`${styled.cartProduct__button} ${styled.cartProduct__inc}`}
                >
                  <img src={arrow} alt="inc" />
                </button>
              </div>
            </div>
          </div>
          <p className={styled.cartProduct__sum}>
            Итого: <b>{sum}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
