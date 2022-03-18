import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductType } from '../../types';
import { useAppDispatch } from '../../hooks';
import { addItem } from '../../redux/cartSlice';

import Counter from '../Counter';
import Dropdown from '../Dropdown';
import Button from '../Button';

import styled from './Card.module.scss';

type CardProps = {
  product: ProductType;
};

const Card = ({ product }: CardProps) => {
  const [amount, setAmount] = useState<number>(1);
  const [color, setColor] = useState<string>(product.colors[0]);

  const dispatch = useAppDispatch();

  const addToCart = () => {
    dispatch(
      addItem({
        title: product.title,
        price: product.price,
        productId: product.productId,
        quantity: amount,
        color,
        image: product.images[0],
      }),
    );
    setAmount(1);
  };

  return (
    <div className={styled.card}>
      <div className={styled.card__image}>
        <img src={product.images[0]} alt="product" />
        <div className={styled.card__hover}>
          <Counter amount={amount} setAmount={setAmount} />
          <Dropdown
            selected={color}
            setSelected={setColor}
            options={product.colors}
          />
          <Button handleClick={addToCart} value="Добавить в корзину" />
        </div>
      </div>
      <div className={styled.card__footer}>
        <Link to={product.productId}>
          <p className={styled.card__title}>{product.title}</p>
        </Link>
        <p className={styled.card__price}>{product.price} грн.</p>
      </div>
    </div>
  );
};

export default Card;
