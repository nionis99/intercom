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
  username: yup.string().required(),
  password: yup.string().required(),
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
          <Form.Label className={errors.username ? 'text-danger' : 'text-black'}>Username</Form.Label>
          <Form.Control ref={register} name="username" type="text" defaultValue="" isInvalid={!!errors.username} />
          {errors.username && (
            <Form.Control.Feedback type="invalid">
              {errors.username.message && t(errors.username.message)}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label className={errors.password ? 'text-danger' : 'text-black'}>Password</Form.Label>
          <Form.Control ref={register} name="password" type="password" defaultValue="" isInvalid={!!errors.password} />
          {errors.password && (
            <Form.Control.Feedback type="invalid">
              {errors.password.message && t(errors.password.message)}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Button type="submit" className="w-100 my-2">
          {t('Login')}
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
