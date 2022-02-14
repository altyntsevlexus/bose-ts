import { Link } from 'react-router-dom';
import styled from './Category.module.scss';

import arrow from '../../images/arrow.svg';
import { CategoryType } from '../../types';

type CategoryProps = {
  category: CategoryType;
};

const Category = ({ category }: CategoryProps) => {
  return (
    <div className={styled.category}>
      <div className={styled.category__image}>
        <img src={category.image} alt="product" />
      </div>
      <div className={styled.category__footer}>
        <p className={styled.category__text}>{category.title}</p>
        <Link className={styled['category__arrow-box']} to={category.link}>
          <img
            src={arrow}
            alt="arrow-right"
            className={styled.category__arrow}
          />
        </Link>
      </div>
    </div>
  );
};

export default Category;
