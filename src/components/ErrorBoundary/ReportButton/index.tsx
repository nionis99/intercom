import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Report } from '@styled-icons/material-rounded';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

import FeedbackForm, { FeedbackInputs } from 'components/ErrorBoundary/ReportForm';

const headers = {
  Authorization: `Bearer ${process.env.REACT_APP_SENTRY_AUTH_TOKEN}`,
  'Content-Type': 'application/x-www-form-urlencoded',
};

interface Props {
  eventId: string;
}

const ReportButton = ({ eventId }: Props) => {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  if (!process.env.REACT_APP_SENTRY_FEEDBACK_PATH) {
    return null;
  }

  const closeModal = () => setModalOpen(false);

  const onSubmitFeedback = async (data: FeedbackInputs) => {
    const url = process.env.REACT_APP_SENTRY_FEEDBACK_PATH;

    if (url) {
      await axios.post(url, { event_id: eventId, ...data }, { headers });
    }
  };

  return (
    <>
      <Button variant="outline-danger" className="mx-2" onClick={() => setModalOpen(!isModalOpen)}>
        <Report className="mr-1" size={20} />
        {t('report')}
      </Button>
      <Modal show={isModalOpen} onHide={() => setModalOpen(!isModalOpen)} centered>
        <Modal.Header className="d-flex flex-column align-items-center">
          <h5>{t('internal_issues_label')}</h5>
          <small>{t('feedback_form_suggestion_label')}</small>
        </Modal.Header>
        <Modal.Body>
          <FeedbackForm onSubmit={onSubmitFeedback} closeModal={closeModal} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReportButton;
