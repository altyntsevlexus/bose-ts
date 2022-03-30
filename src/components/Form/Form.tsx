import { Formik, Form as FormikForm, FormikConfig } from 'formik';
import styled from './Form.module.scss';
import { LoginValues } from '../../types';

const Form = ({
  children,
  initialValues,
  onSubmit,
  validationSchema,
}: FormikConfig<LoginValues>) => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    <FormikForm className={styled.form}>{children}</FormikForm>
  </Formik>
);

export default Form;
