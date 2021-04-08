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

export interface ChangePinInput {
  id: number;
  pin: string;
}

const pinCodeSchema = yup.object().shape({
  pin: yup
    .string()
    .required('required_pin_code')
    .matches(/^[0-9]*$/, 'pin_format')
    .trim(),
});

interface Props {
  pinCode: string;
  onSubmit: (data: ChangePinInput) => Promise<void>;
  handleClose: () => void;
  loading: boolean;
}

const ChangePinForm = ({ pinCode, onSubmit, handleClose, loading }: Props) => {
  const { t } = useTranslation();

  const { handleSubmit, register, errors } = useForm<ChangePinInput>({
    mode: 'all',
    resolver: yupResolver(pinCodeSchema),
  });

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-100 align-items-center mb-2">
      <Form.Group className="w-100 mb-2">
        <Form.Label>{t('pin_code')}</Form.Label>
        <Form.Control
          ref={register}
          placeholder={t('pin_code')}
          name="pin"
          type="text"
          defaultValue={pinCode}
          isInvalid={!!errors.pin}
        />
        <Form.Control.Feedback type="invalid">{errors.pin?.message && t(errors.pin.message)}</Form.Control.Feedback>
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

export default ChangePinForm;
