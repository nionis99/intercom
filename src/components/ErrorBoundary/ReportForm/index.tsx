import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import yup from 'utils/yup';

const headers = {
  Authorization: `Bearer ${process.env.REACT_APP_SENTRY_AUTH_TOKEN}`,
  'Content-Type': 'application/json',
};

interface Props {
  eventId: string;
  closeModal: () => void;
  redirectToHomepage: () => void;
}

export interface FeedbackInputs {
  name: string;
  comments: string;
  email: string;
  feedbackError: string;
}

const feedbackSchema = yup.object({
  name: yup.string().required('name_required_error'),
  email: yup.string().required('email_required_error').email('email_format_error'),
  comments: yup.string().required('comments_required_error').trim().max(1000, 'comments_max_length_error'),
});

const FeedbackForm = ({ redirectToHomepage, eventId, closeModal }: Props) => {
  const { t } = useTranslation();

  const { register, handleSubmit, errors, setError } = useForm<FeedbackInputs>({
    mode: 'all',
    resolver: yupResolver(feedbackSchema),
  });

  const onSubmitFeedback = async (data: FeedbackInputs) => {
    const url = process.env.REACT_APP_SENTRY_FEEDBACK_PATH;

    if (url) {
      await axios
        .post(url, { event_id: eventId, ...data }, { headers })
        .then(() => {
          closeModal();
          redirectToHomepage();
        })
        .catch((error) => setError('feedbackError', { message: error.message }));
    }
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmitFeedback)} className="d-flex flex-column">
      <Form.Group className="w-100">
        <Form.Label className="text-muted small">{t('username')}</Form.Label>
        <Form.Control type="text" name="name" ref={register} isInvalid={!!errors.name} />
        <Form.Control.Feedback type="invalid">{errors.name?.message && t(errors.name.message)}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="w-100">
        <Form.Label className="text-muted small">{t('email')}</Form.Label>
        <Form.Control type="email" name="email" ref={register} isInvalid={!!errors.email} />
        <Form.Control.Feedback type="invalid">{errors.email?.message && t(errors.email.message)}</Form.Control.Feedback>
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
          {errors.comments?.message && t(errors.comments.message)}
        </Form.Control.Feedback>
      </Form.Group>
      {!!errors.feedbackError?.message && (
        <div className="fake-invalid-feedback mb-3">{errors.feedbackError.message}</div>
      )}
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
