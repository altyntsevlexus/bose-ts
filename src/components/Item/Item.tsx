import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductType } from '../../types';

import Counter from '../Counter';
import Dropdown from '../Dropdown';
import Button from '../Button';

import styled from './Item.module.scss';

type ItemProps = {
  product: ProductType;
};

const Item = ({ product }: ItemProps) => {
  const [amount, setAmount] = useState<number>(1);
  const [color, setColor] = useState<string>(product.colors[0]);

  const addToCart = () => {
    console.log(product.title, amount * product.price, color);
    setAmount(1);
  };

  return (
    <div className={styled.item}>
      <div className={styled.item__image}>
        <img src={product.images[0]} alt="product" />
        <div className={styled.item__hover}>
          <Counter amount={amount} setAmount={setAmount} />
          <Dropdown
            selected={color}
            setSelected={setColor}
            options={product.colors}
          />
          <Button handleClick={addToCart} />
        </div>
      </div>
      <div className={styled.item__footer}>
        <Link to={product.productId}>
          <p className={styled.item__name}>{product.title}</p>
        </Link>
        <p className={styled.item__price}>{product.price} грн.</p>
      </div>
    </div>
  );
};

export default Item;
