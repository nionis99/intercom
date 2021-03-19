import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Report } from '@styled-icons/material-rounded';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import FeedbackForm from 'components/ErrorBoundary/ReportForm';

interface Props {
  eventId: string;
  redirectToHomepage: () => void;
}

const ReportButton = ({ redirectToHomepage, eventId }: Props) => {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  if (!process.env.REACT_APP_SENTRY_FEEDBACK_PATH) {
    return null;
  }

  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Button variant="outline-danger" className="mx-2" onClick={() => setModalOpen(!isModalOpen)}>
        <Report className="mr-1" size={20} />
        {t('report')}
      </Button>
      <Modal show={isModalOpen} onHide={() => setModalOpen(!isModalOpen)} centered>
        <Modal.Header className="d-flex flex-column align-items-center">
          <h5 className="text-center">{t('internal_issues_label')}</h5>
          <small className="text-center">{t('feedback_form_suggestion_label')}</small>
        </Modal.Header>
        <Modal.Body>
          <FeedbackForm redirectToHomepage={redirectToHomepage} eventId={eventId} closeModal={closeModal} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReportButton;
