import React from 'react';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import yup from 'utils/yup';

export interface LoginFormInputs {
  login: string;
  password: string;
}

const loginSchema = yup.object().shape({
  login: yup.string().required('name_required_error'),
  password: yup.string().required('password_required_error'),
});

interface Props {
  handleLoginSubmit: (data: LoginFormInputs) => void;
  loading: boolean;
}

const LoginForm = ({ handleLoginSubmit, loading }: Props) => {
  const { t } = useTranslation();

  console.log(loading);

  const { handleSubmit, errors, register } = useForm<LoginFormInputs>({
    mode: 'all',
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => handleLoginSubmit({ ...data });

  return (
    <div className="mx-4 login">
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="w-100">
          <Form.Label className={errors.login ? 'text-danger' : 'text-black'}>{t('username')}</Form.Label>
          <Form.Control ref={register} name="login" type="text" defaultValue="" isInvalid={!!errors.login} />
          {!!errors.login?.message && (
            <Form.Control.Feedback type="invalid">{t(errors.login.message)}</Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group className="w-100">
          <Form.Label className={errors.password ? 'text-danger' : 'text-black'}>{t('password')}</Form.Label>
          <Form.Control ref={register} name="password" type="password" defaultValue="" isInvalid={!!errors.password} />
          {errors.password?.message && (
            <Form.Control.Feedback type="invalid">{t(errors.password.message)}</Form.Control.Feedback>
          )}
        </Form.Group>
        <Button type="submit" className="w-100 my-2 align-items-center" disabled={loading}>
          {loading ? <Spinner size="sm" animation="border" className="align-middle" /> : t('login')}
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
