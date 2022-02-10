import { useState } from 'react';
import styled from './Item.module.scss';
import Counter from '../Counter';

import Dropdown from '../Dropdown';
import Button from '../Button';
import { ProductType } from '../../types';

type ItemProps = {
  product: ProductType;
};

const Item = ({ product }: ItemProps) => {
  const [amount, setAmount] = useState<number>(1);
  const [color, setColor] = useState<string>(product.colors[0]);

  const addToCart = () => {
    setAmount(1);
    console.log(product.title, amount * product.price, color);
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
        <p className={styled.item__name}>{product.title}</p>
        <p className={styled.item__price}>{product.price}</p>
      </div>
    </div>
  );
};

export default Item;
