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
import { Contacts } from 'types';

export interface ChangeContactsInputs {
  username: string;
  email: string;
  phoneNumber: string;
}

const contactsSchema = yup.object().shape({
  username: yup.string().required('name_required_error').trim(),
  email: yup.string().email().required('email_required'),
  phoneNumber: yup.string().phoneNumber().required('phone_number_required'),
});

interface Props {
  contacts: Contacts;
  onSubmit: (data: ChangeContactsInputs) => void;
  handleClose: () => void;
  loading: boolean;
}

const ChangeContactsForm = ({ contacts, onSubmit, handleClose, loading }: Props) => {
  const { t } = useTranslation();

  const { handleSubmit, register, errors, setValue } = useForm<ChangeContactsInputs>({
    mode: 'all',
    resolver: yupResolver(contactsSchema),
  });

  const onPhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setValue('phoneNumber', formattedPhoneNumber);
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-100 align-items-center mb-2">
      <Form.Group className="w-100 mb-2">
        <Form.Label>{t('username')}</Form.Label>
        <Form.Control
          ref={register}
          placeholder={t('username')}
          name="username"
          type="text"
          defaultValue={contacts.username}
          isInvalid={!!errors.username}
        />
        <Form.Control.Feedback type="invalid">
          {errors.username?.message && t(errors.username.message)}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="w-100 mb-2">
        <Form.Label>{t('email')}</Form.Label>
        <Form.Control
          ref={register}
          placeholder={t('email')}
          name="email"
          type="text"
          defaultValue={contacts.email}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.username?.message && t(errors.username.message)}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="w-100 mb-2">
        <Form.Label>{t('phone_number')}</Form.Label>
        <Form.Control
          ref={register}
          name="phoneNumber"
          defaultValue={contacts.phoneNumber}
          placeholder={t('phone_number')}
          onChange={onPhoneNumberChange}
          isInvalid={!!errors.phoneNumber}
        />
        <Form.Control.Feedback type="invalid">
          {errors.phoneNumber?.message && t(errors.phoneNumber.message)}
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

export default ChangeContactsForm;
