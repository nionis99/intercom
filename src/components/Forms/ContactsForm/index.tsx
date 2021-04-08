import React, { ChangeEvent } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import yup, { formatPhoneNumber } from 'utils/yup';

export interface ChangeContactsInputs {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const contactsSchema = yup.object().shape({
  name: yup.string().required('name_required_error').trim(),
  email: yup.string().email('email_format'),
  phone: yup.string().phoneNumber(),
});

interface Props {
  name: string;
  email: string;
  phone: string;
  onSubmit: (data: ChangeContactsInputs) => void;
  handleClose: () => void;
  loading: boolean;
}

const ChangeContactsForm = ({ name, email, phone, onSubmit, handleClose, loading }: Props) => {
  const { t } = useTranslation();

  const { handleSubmit, register, errors, setValue } = useForm<ChangeContactsInputs>({
    mode: 'all',
    resolver: yupResolver(contactsSchema),
  });

  const onPhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setValue('phone', formattedPhoneNumber);
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-100 align-items-center mb-2">
      <Form.Group className="w-100 mb-2">
        <Form.Label>{t('name')}</Form.Label>
        <Form.Control
          ref={register}
          placeholder={t('name')}
          name="name"
          type="text"
          defaultValue={name}
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">{errors.name?.message && t(errors.name.message)}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="w-100 mb-2">
        <Form.Label>{t('email')}</Form.Label>
        <Form.Control
          ref={register}
          placeholder={t('email')}
          name="email"
          type="text"
          defaultValue={email}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">{errors.email?.message && t(errors.email.message)}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="w-100 mb-2">
        <Form.Label>{t('phone')}</Form.Label>
        <Form.Control
          ref={register}
          name="phone"
          defaultValue={phone}
          placeholder={t('phone')}
          onChange={onPhoneNumberChange}
          isInvalid={!!errors.phone}
        />
        <Form.Control.Feedback type="invalid">{errors.phone?.message && t(errors.phone.message)}</Form.Control.Feedback>
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

export default ChangeContactsForm;
