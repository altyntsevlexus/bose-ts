import { useAppDispatch } from '../../hooks';
import Title from '../../components/Title';
// import styled from './Cart.module.scss';
import Button from '../../components/Button';
import { userLogin } from '../../redux/userSlice';

const Login = () => {
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(userLogin({ identifier: 'moyo@mail.com', password: '12345678' }));
  };

  return (
    <>
      <Title value="Добро пожаловать!" />
      <Button handleClick={handleLogin} value="Войти" />
    </>
  );
};

export default Login;
