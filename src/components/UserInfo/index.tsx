import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import { useStateSelector } from 'hooks/useReduxStateSelector';
import { changePassword } from 'redux/actions/User';
import User from 'types/User';
import yup from 'utils/yup';

export interface ProfileFormInputs {
  password: string;
}

const profileSchema = yup.object().shape({
  password: yup.string().required('required_password').min(8, 'password_min_length'),
});

interface Props {
  user: User;
}

const UserInfo = ({ user }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { changePasswordLoading } = useStateSelector((state) => state.user);

  const { handleSubmit, errors, register, formState } = useForm<ProfileFormInputs>({
    mode: 'onSubmit',
    resolver: yupResolver(profileSchema),
  });

  const onSubmit = (data: ProfileFormInputs) => {
    const responseText = t('password_changed');
    return dispatch(changePassword(user.id, data, responseText));
  };

  return (
    <Col
      xl={4}
      lg={5}
      md={6}
      sm={7}
      xs={8}
      className="d-flex w-100 flex-column col-lg-5 col-md-6 col-xl-4 align-items-center text-center"
    >
      <Form noValidate onSubmit={handleSubmit(onSubmit)} className="w-100">
        <Form.Group className="w-100">
          <Form.Label>{t('username')}</Form.Label>
          <Form.Control name="username" type="text" defaultValue={user.login} readOnly />
        </Form.Group>
        <Form.Group className="w-100">
          <Form.Label className={errors.password ? 'text-danger' : 'text-black'}>{t('password')}</Form.Label>
          <Form.Control
            ref={register}
            name="password"
            type="password"
            defaultValue={user.password}
            isInvalid={!!errors.password}
          />
          {errors.password?.message && (
            <Form.Control.Feedback type="invalid">{t(errors.password.message)}</Form.Control.Feedback>
          )}
        </Form.Group>
        <Button
          type="submit"
          className="w-100 my-2 align-items-center"
          disabled={!formState.isDirty || changePasswordLoading}
        >
          {changePasswordLoading ? (
            <Spinner size="sm" animation="border" className="align-middle" />
          ) : (
            t('change_password')
          )}
        </Button>
      </Form>
    </Col>
  );
};

export default UserInfo;
