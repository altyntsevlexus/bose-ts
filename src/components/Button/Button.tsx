import styled from './Button.module.scss';

type ButtonProps = {
  handleClick: () => void;
};

const Button = ({ handleClick }: ButtonProps) => {
  return (
    <button type="button" className={styled.button} onClick={handleClick}>
      Добавить в корзину
    </button>
  );
};

export default Button;
