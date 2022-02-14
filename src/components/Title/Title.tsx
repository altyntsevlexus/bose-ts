import styled from './Title.module.scss';

type TitleProps = {
  value: string;
};

const Title = ({ value }: TitleProps) => {
  return <h1 className={styled.title}>{value}</h1>;
};

export default Title;
