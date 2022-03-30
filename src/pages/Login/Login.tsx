import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../hooks';
import styled from './Login.module.scss';
import { userLogin } from '../../redux/userSlice';
import Title from '../../components/Title';
import Form from '../../components/Form';
import Submit from '../../components/Form/Submit';
import Loader from '../../components/Loader';
import FieldGroup from '../../components/Form/FiledGroup';
import ErrorMessage from '../../components/Form/ErrorMessage';

const email = Yup.string().required('Required').email('Invalid email');
const password = Yup.string()
  .required('Required')
  .min(8, 'Password minimum length 8 characters')
  .matches(/[0-9]/, 'Password require at list 1 number 0-9');
const loginSchema = Yup.object({
  email,
  password,
});
const Login = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((store) => store.user.loading);
  const error = useAppSelector((store) => store.user.error);

  const handleLogin = (values: { email: string; password: string }) => {
    dispatch(
      userLogin({ identifier: values.email, password: values.password }),
    );
  };

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <div className={styled.login}>
      <Title value="Добро пожаловать!" />

      <Form
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleLogin(values);
          setSubmitting(false);
        }}
      >
        <FieldGroup
          name="email"
          placeholder="Введите электронную почту"
          label="Логин"
          type="email"
        />
        <FieldGroup
          name="password"
          placeholder="Введите пароль"
          label="Пароль"
          type="password"
        />
        {loading ? <Loader /> : <Submit value="Войти" />}
        {error && <ErrorMessage value={error} />}
      </Form>
    </div>
  );
};

export default Login;
