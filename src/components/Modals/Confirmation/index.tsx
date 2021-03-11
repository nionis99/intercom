import React from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useTranslation } from 'react-i18next';

import ModalContainer from 'components/Modals';

interface Props {
  title: string;
  confirmText: string;
  onSubmitClick: () => void;
  onResetClick: () => void;
  isLoading?: boolean;
}

const ModalOfConfirmation = ({ title, confirmText, onSubmitClick, onResetClick, isLoading }: Props) => {
  const { t } = useTranslation();

  return (
    <ModalContainer isActive centered handleClose={onResetClick}>
      <h5 className="text-center p-3">{title}</h5>
      <div className="d-flex flex-row justify-content-between">
        <Button variant="danger" className="w-50 mr-1" onClick={onSubmitClick} disabled={isLoading}>
          {isLoading ? <Spinner size={'sm'} animation="border" className="align-middle" /> : confirmText}
        </Button>
        <Button variant="secondary" className="w-50" onClick={onResetClick}>
          {t('cancel')}
        </Button>
      </div>
    </ModalContainer>
  );
};

export default ModalOfConfirmation;
