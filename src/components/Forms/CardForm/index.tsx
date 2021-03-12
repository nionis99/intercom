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
import { Member } from 'types';

export interface CardFormInputs {
  cardId: string;
  code: string;
  status: boolean;
}

const cardSchema = yup.object().shape({
  cardId: yup.string().required('required_card_id').trim(),
  code: yup.string().required('required_pin_code').trim(),
  status: yup.boolean(),
});

interface Props {
  editingCard?: Member;
  onSubmit: (data: CardFormInputs) => void;
  handleClose: () => void;
  loading: boolean;
}

const CardForm = ({ editingCard, onSubmit, handleClose, loading }: Props) => {
  const { t } = useTranslation();

  const { handleSubmit, register, setValue, watch, errors } = useForm<CardFormInputs>({
    mode: 'all',
    resolver: yupResolver(cardSchema),
    defaultValues: {
      cardId: editingCard?.cardId || '',
      code: editingCard?.code || '',
      status: editingCard?.status || false,
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
          checked={values.status}
          onChange={() => setValue('status', !values.status)}
          name="status"
        />
      </Form.Group>
      <Form.Group className="w-100 mb-2">
        <Form.Label>{t('card_id')}</Form.Label>
        <Form.Control ref={register} placeholder={t('card_id')} name="cardId" type="text" isInvalid={!!errors.cardId} />
        <Form.Control.Feedback type="invalid">
          {errors.cardId?.message && t(errors.cardId.message)}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="w-100 mb-2">
        <Form.Label>{t('pin_code')}</Form.Label>
        <Form.Control ref={register} placeholder={t('pin_code')} name="code" type="text" isInvalid={!!errors.code} />
        <Form.Control.Feedback type="invalid">{errors.code?.message && t(errors.code.message)}</Form.Control.Feedback>
      </Form.Group>
      <div className="w-100 my-2">
        <Row>
          <Col>
            <Button className="w-100" disabled={loading} type="submit">
              {loading ? (
                <Spinner size={'sm'} animation="border" className="align-middle" />
              ) : (
                t(editingCard ? 'edit' : 'create')
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

export default CardForm;
