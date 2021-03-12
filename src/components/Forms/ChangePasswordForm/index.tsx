import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import yup from 'utils/yup';

export interface ChangePasswordInput {
  password: string;
}

const passwordSchema = yup.object().shape({
  password: yup.string().required('required_password').min(8, 'password_min_length'),
});

interface Props {
  onSubmit: (data: ChangePasswordInput) => void;
  handleClose: () => void;
  loading: boolean;
}

const ChangePasswordForm = ({ onSubmit, handleClose, loading }: Props) => {
  const { t } = useTranslation();

  const { handleSubmit, register, errors } = useForm<ChangePasswordInput>({
    mode: 'all',
    resolver: yupResolver(passwordSchema),
  });

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-100 align-items-center mb-2">
      <Form.Group className="w-100 mb-2">
        <Form.Label>{t('new_password')}</Form.Label>
        <Form.Control
          ref={register}
          placeholder={t('new_password')}
          name="password"
          type="password"
          isInvalid={!!errors.password}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password?.message && t(errors.password.message)}
        </Form.Control.Feedback>
      </Form.Group>
      <div className="w-100 my-2">
        <Row>
          <Col>
            <Button className="w-100" disabled={loading} type="submit">
              {loading ? <Spinner size={'sm'} animation="border" className="align-middle" /> : t('change')}
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" className="w-100" onClick={handleClose}>
              {t('cancel')}
            </Button>
          </Col>
        </Row>
      </div>
    </Form>
  );
};

export default ChangePasswordForm;
