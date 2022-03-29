import styled from './Button.module.scss';

type ButtonProps = {
  handleClick?: () => void;
  value: string;
  color?: 'light' | 'dark';
};

const Button = ({ handleClick, value, color }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${styled.button} ${
        color === 'light'
          ? styled['button--c--light']
          : styled['button--c--dark']
      }`}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

Button.defaultProps = {
  handleClick: () => null,
  color: 'light',
};

export default Button;
