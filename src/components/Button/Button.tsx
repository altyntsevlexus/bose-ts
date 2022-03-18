import styled from './Button.module.scss';

type ButtonProps = {
  handleClick?: () => void;
  value: string;
};

const Button = ({ handleClick, value }: ButtonProps) => {
  return (
    <button type="button" className={styled.button} onClick={handleClick}>
      {value}
    </button>
  );
};

Button.defaultProps = {
  handleClick: () => null,
};

export default Button;
