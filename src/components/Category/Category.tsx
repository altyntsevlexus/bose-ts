import styled from './Category.module.scss';

import arrow from '../../images/arrow.svg';
import test from '../../images/test.png';

const Category = () => {
  return (
    <div className={styled.category}>
      <div className={styled.category__image}>
        <img src={test} alt="product" />
      </div>
      <div className={styled.category__footer}>
        <p className={styled.category__text}>Наушники</p>
        <div className={styled['category__arrow-box']}>
          <img
            src={arrow}
            alt="arrow-right"
            className={styled.category__arrow}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
