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
import FlatUser from 'types/FlatUser';
import { Maybe } from 'types';

export interface FlatUserFormInputs {
  id: number;
  flat_id: Maybe<number>;
  is_active: boolean;
  password: string;
}

const flatUserSchema = yup.object().shape({
  is_active: yup.boolean(),
  password: yup.string().required('required_password').min(8, 'password_min_length'),
});

interface Props {
  editingFlatUser?: FlatUser;
  onSubmit: (data: FlatUserFormInputs) => void;
  handleClose: () => void;
  loading: boolean;
}

const FlatUserForm = ({ editingFlatUser, onSubmit, handleClose, loading }: Props) => {
  const { t } = useTranslation();

  const { handleSubmit, register, setValue, watch, errors } = useForm<FlatUserFormInputs>({
    mode: 'all',
    resolver: yupResolver(flatUserSchema),
    defaultValues: {
      is_active: editingFlatUser?.is_active,
      password: editingFlatUser?.password || '',
    },
  });

  const values = watch();

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-100 align-items-center mb-2">
      <Form.Group className="d-flex w-100 mb-2 justify-content-end">
        <Form.Check
          ref={register}
          type="switch"
          className="switch-toggle"
          id="custom-switch"
          label={t('status')}
          checked={values.is_active}
          onChange={() => setValue('is_active', !values.is_active)}
          name="is_active"
        />
      </Form.Group>
      <Form.Group className="w-100 mb-2">
        <Form.Label>{t('password')}</Form.Label>
        <Form.Control
          ref={register}
          placeholder={t('password')}
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
              {loading ? <Spinner size={'sm'} animation="border" className="align-middle" /> : t('edit')}
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

export default FlatUserForm;
