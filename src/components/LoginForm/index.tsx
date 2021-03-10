import React from 'react';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import yup from 'utils/yup';

export interface LoginFormInputs {
  username: string;
  password: string;
}

const loginSchema = yup.object().shape({
  username: yup.string().required('name_required_error'),
  password: yup.string().required('password_required_error'),
});

interface Props {
  handleLoginSubmit: (data: LoginFormInputs) => void;
}

const LoginForm = ({ handleLoginSubmit }: Props) => {
  const { t } = useTranslation();

  const { handleSubmit, errors, register } = useForm<LoginFormInputs>({
    mode: 'all',
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => handleLoginSubmit({ ...data });

  return (
    <div className="mx-4 login">
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label className={errors.username ? 'text-danger' : 'text-black'}>{t('username')}</Form.Label>
          <Form.Control ref={register} name="username" type="text" defaultValue="" isInvalid={!!errors.username} />
          {errors.username && (
            <Form.Control.Feedback type="invalid">
              {errors.username.message && t(errors.username.message)}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label className={errors.password ? 'text-danger' : 'text-black'}>{t('password')}</Form.Label>
          <Form.Control ref={register} name="password" type="password" defaultValue="" isInvalid={!!errors.password} />
          {errors.password && (
            <Form.Control.Feedback type="invalid">
              {errors.password.message && t(errors.password.message)}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Button type="submit" className="w-100 my-2">
          {t('login')}
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
