import styled from './ErrorMessage.module.scss';

type ErrorMessageProps = {
  value: string;
};

const ErrorMessage = ({ value }: ErrorMessageProps) => (
  <p className={styled.error}>{value}</p>
);

export default ErrorMessage;
