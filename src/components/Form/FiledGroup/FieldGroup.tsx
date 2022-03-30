import { Field, useFormikContext } from 'formik';
import styled from './FieldGroup.module.scss';
import { LoginValues } from '../../../types';
import ErrorMessage from '../ErrorMessage';

type FieldGroupProps = {
  name: string;
  placeholder: string;
  label: string;
  type: string;
};

const FieldGroup = ({ name, placeholder, label, type }: FieldGroupProps) => {
  const { errors, touched } = useFormikContext<LoginValues>();

  const error = errors[name as keyof LoginValues];
  const touch = touched[name as keyof LoginValues];

  return (
    <div className={styled['field-group']}>
      <label htmlFor={name} className={styled['field-group__label']}>
        {label}
      </label>
      <Field
        name={name}
        id={name}
        placeholder={placeholder}
        type={type}
        className={styled['field-group__input']}
      />
      {error && touch && <ErrorMessage value={error} />}
    </div>
  );
};

export default FieldGroup;
