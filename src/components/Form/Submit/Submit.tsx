import styled from './Submit.module.scss';

type SubmitProps = {
  value: string;
};

const Submit = ({ value }: SubmitProps) => (
  <button type="submit" className={styled.submit}>
    {value}
  </button>
);

export default Submit;
