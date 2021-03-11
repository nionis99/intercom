import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import yup from 'utils/yup';

interface Props {
  closeModal: () => void;

  onSubmit(data: FeedbackInputs): Promise<void>;
}

export interface FeedbackInputs {
  name: string;
  comments: string;
}

const feedbackSchema = yup.object({
  name: yup
    .string()
    .required('name_required_error')
    .min(2, 'your_name_min_length_error')
    .max(30, `your_name_max_length_error`),
  comments: yup.string().required('comments_required_error').trim().max(1000, 'comments_max_length_error'),
});

const FeedbackForm = ({ onSubmit, closeModal }: Props) => {
  const { t } = useTranslation();
  const { register, handleSubmit, errors } = useForm<FeedbackInputs>({
    mode: 'all',
    resolver: yupResolver(feedbackSchema),
  });

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
      <Form.Group className="w-100">
        <Form.Label className="text-muted small">{t('name')}</Form.Label>
        <Form.Control type="text" name="name" ref={register} isInvalid={!!errors.name} />
        <Form.Control.Feedback type="invalid">{errors.name?.message && t(errors.name?.message)}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="w-100">
        <Form.Label className="text-muted small">{t('what_happened')}</Form.Label>
        <Form.Control
          as="textarea"
          placeholder={t('what_happened_placeholder')}
          rows={3}
          name="comments"
          ref={register}
          isInvalid={!!errors.comments}
        />
        <Form.Control.Feedback type="invalid">
          {errors.comments?.message && t(errors.comments?.message)}
        </Form.Control.Feedback>
      </Form.Group>
      <div className="d-flex">
        <Button className="btn-primary mx-2" type="submit">
          {t('send')}
        </Button>
        <Button className="btn-secondary mx-2" onClick={closeModal}>
          {t('close')}
        </Button>
      </div>
    </Form>
  );
};

export default FeedbackForm;
