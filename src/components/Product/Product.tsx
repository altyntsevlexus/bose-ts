import { useState } from 'react';
import Slider from 'react-slick';
import { ProductType } from '../../types';
import { useAppDispatch } from '../../hooks';
import { addItem } from '../../redux/cartSlice';

import Button from '../Button';
import Counter from '../Counter';
import Dropdown from '../Dropdown';

import styled from './Product.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type ProductProps = {
  product: ProductType;
};

const Product = ({ product }: ProductProps) => {
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
    <div className={styled.product}>
      <div className={styled.product__image}>
        <Slider dots infinite speed={500}>
          {product.images.map((image) => {
            return <img src={image} alt="product" key={image} />;
          })}
        </Slider>
      </div>
      <div className={styled.product__info}>
        <p className={styled.product__title}>{product.title}</p>
        <div className={styled.product__price}>{product.price} грн.</div>
        <div className={styled.product__description}>
          {product.description.split(';').map((i) => (
            <p key={i}>{i}</p>
          ))}
        </div>
        <div className={styled.product__nav}>
          <Counter amount={amount} setAmount={setAmount} />
          <Dropdown
            selected={color}
            setSelected={setColor}
            options={product.colors}
          />
          <Button handleClick={addToCart} />
        </div>
      </div>
    </div>
  );
};

export default Product;
