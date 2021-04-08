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
import Member from 'types/Member';
import { DEFAULT_MEMBER_NAME } from 'Constants';
import { Maybe } from 'types';

export interface MemberFormInputs {
  id: number;
  flat_id: Maybe<number>;
  is_active: boolean;
  name: string;
  email: string;
  phone: string;
  note: string;
  pin: string;
}

const memberSchema = yup.object().shape({
  is_active: yup.boolean(),
  name: yup.string().required('name_required').trim(),
  email: yup.string().email(),
  phone: yup.string().phoneNumber(),
  note: yup.string().trim(),
  pin: yup.string().required(),
});

interface Props {
  editingMember?: Member;
  onSubmit: (data: MemberFormInputs) => void;
  handleClose: () => void;
  loading: boolean;
}

const MemberForm = ({ editingMember, onSubmit, handleClose, loading }: Props) => {
  const { t } = useTranslation();

  const { handleSubmit, register, setValue, watch, errors } = useForm<MemberFormInputs>({
    mode: 'all',
    resolver: yupResolver(memberSchema),
    defaultValues: {
      is_active: editingMember?.is_active || true,
      name: editingMember?.name || t(DEFAULT_MEMBER_NAME),
      email: editingMember?.email || '',
      phone: editingMember?.phone || '',
      note: editingMember?.note || '',
      pin: editingMember?.pin || '',
    },
  });

  const values = watch();

  const onPhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setValue('phone', formattedPhoneNumber);
  };

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
        <Form.Label>{t('name')}</Form.Label>
        <Form.Control ref={register} placeholder={t('name')} name="name" type="text" isInvalid={!!errors.name} />
        <Form.Control.Feedback type="invalid">{errors.name?.message && t(errors.name.message)}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="w-100 mb-2">
        <Form.Label>{t('email')}</Form.Label>
        <Form.Control ref={register} placeholder={t('email')} name="email" type="text" isInvalid={!!errors.email} />
        <Form.Control.Feedback type="invalid">{errors.email?.message && t(errors.email.message)}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="w-100 mb-2">
        <Form.Label>{t('phone')}</Form.Label>
        <Form.Control
          ref={register}
          placeholder={t('phone')}
          name="phone"
          onChange={onPhoneNumberChange}
          type="text"
          isInvalid={!!errors.phone}
        />
        <Form.Control.Feedback type="invalid">{errors.phone?.message && t(errors.phone.message)}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="w-100 mb-2">
        <Form.Label>{t('note')}</Form.Label>
        <Form.Control ref={register} placeholder={t('note')} name="note" type="text" isInvalid={!!errors.note} />
        <Form.Control.Feedback type="invalid">{errors.note?.message && t(errors.note.message)}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="w-100 mb-2">
        <Form.Label>{t('pin')}</Form.Label>
        <Form.Control ref={register} placeholder={t('pin')} name="pin" type="text" isInvalid={!!errors.pin} />
        <Form.Control.Feedback type="invalid">{errors.pin?.message && t(errors.pin.message)}</Form.Control.Feedback>
      </Form.Group>
      <div className="w-100 my-2">
        <Row>
          <Col>
            <Button className="w-100" disabled={loading} type="submit">
              {loading ? (
                <Spinner size={'sm'} animation="border" className="align-middle" />
              ) : (
                t(editingMember ? 'edit' : 'create')
              )}
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

export default MemberForm;
