import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import { useStateSelector } from 'hooks/useReduxStateSelector';
import { getCardTypes } from 'redux/actions/CardTypes';
import LoadingView from 'components/Loading';
import Card from 'types/Card';
import yup from 'utils/yup';

export interface CardFormInputs {
  id: number;
  account_id: number;
  type: string;
  type_id: string;
  card_no: string;
  note: string;
}

const cardSchema = yup.object().shape({
  card_no: yup
    .string()
    .required('card_no_required')
    .min(8, 'card_no_length')
    .max(8, 'card_no_length')
    .matches(/^[0-9]*$/, 'card_no_format'),
  type_id: yup.string().required('type_required'),
  note: yup.string().trim(),
});

interface MemberRouteParams {
  memberId: string;
}

interface Props {
  editingCard?: Card;
  onSubmit: (data: CardFormInputs) => Promise<void>;
  handleClose: () => void;
  loading: boolean;
}

const CardForm = ({ editingCard, onSubmit, handleClose, loading }: Props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { memberId } = useParams<MemberRouteParams>();
  const [cardType, setCardType] = useState('');
  const { cardTypesLoading, cardTypesData } = useStateSelector((state) => state.cardTypes);

  useEffect(() => {
    dispatch(getCardTypes());
  }, [dispatch]);

  const { handleSubmit, register, errors } = useForm<CardFormInputs>({
    mode: 'all',
    resolver: yupResolver(cardSchema),
    defaultValues: {
      card_no: editingCard?.card_no || '',
      type_id: editingCard?.type_id.toString() || '',
      type: editingCard?.type || '',
      note: editingCard?.note || '',
    },
  });

  const onCardTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCardType(event.target.options[event.target.selectedIndex].text);
  };

  const onFormSubmit = (data: CardFormInputs) => {
    const type_id = (parseInt(data.type_id) as unknown) as string;

    return onSubmit({ ...data, account_id: parseInt(memberId), type: editingCard?.type || cardType, type_id });
  };

  if (cardTypesLoading) return <LoadingView />;

  return (
    <Form noValidate onSubmit={handleSubmit(onFormSubmit)} className="d-flex flex-column w-100 align-items-center mb-2">
      <div className="w-100 my-2">
        <Form.Group className="w-100 mb-2">
          <Form.Label>{t('card_no')}</Form.Label>
          <Form.Control
            ref={register}
            placeholder={t('card_no')}
            name="card_no"
            type="text"
            isInvalid={!!errors.card_no}
          />
          <Form.Control.Feedback type="invalid">
            {errors.card_no?.message && t(errors.card_no.message)}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="w-100 mb-2">
          <Form.Label>{t('type')}</Form.Label>
          <Form.Control
            as="select"
            ref={register}
            name="type_id"
            isInvalid={!!errors.type_id}
            onChange={onCardTypeChange}
          >
            {cardTypesData.map((card) => (
              <option key={card.id} value={card.id} className="text-truncate">
                {card.name}
              </option>
            ))}
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors.type_id?.message && t(errors.type_id.message)}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="w-100 mb-3">
          <Form.Label>{t('note')}</Form.Label>
          <Form.Control ref={register} placeholder={t('note')} name="note" type="text" isInvalid={!!errors.note} />
          <Form.Control.Feedback type="invalid">{errors.note?.message && t(errors.note.message)}</Form.Control.Feedback>
        </Form.Group>
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
