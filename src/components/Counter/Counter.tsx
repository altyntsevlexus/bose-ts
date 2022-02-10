import { SyntheticEvent } from 'react';

import styled from './Counter.module.scss';
import arrow from '../../images/arrow-min.svg';

type CounterType = {
  amount: number;
  setAmount: (number: number) => void;
};

const Counter = ({ amount, setAmount }: CounterType) => {
  const handleChangeAmount = (e: SyntheticEvent<HTMLButtonElement>) => {
    if (e.currentTarget.name === 'increment') {
      setAmount(amount + 1);
    } else if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const handleTypeAmount = (e: SyntheticEvent<HTMLInputElement>) => {
    setAmount(+e.currentTarget.value ? +e.currentTarget.value : 0);
  };

  return (
    <div className={styled.counter}>
      <button
        className={styled.counter__box}
        type="button"
        onClick={handleChangeAmount}
        name="decrement"
      >
        <img src={arrow} alt="arrow-dec" className={styled.counter__dec} />
      </button>
      <input
        className={styled.counter__box}
        value={amount}
        onChange={handleTypeAmount}
      />
      <button
        className={styled.counter__box}
        type="button"
        onClick={handleChangeAmount}
        name="increment"
      >
        <img src={arrow} alt="arrow-inc" className={styled.counter__inc} />
      </button>
    </div>
  );
};

export default Counter;
