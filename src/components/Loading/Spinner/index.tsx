import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useTranslation } from 'react-i18next';

interface Props {
  className?: string;
  text?: boolean;
}

const Loading = ({ className = '', text = false }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={`d-flex flex-column justify-content-center w-100 align-items-center ${className}`}>
      {text ? `${t('loading')}...` : <Spinner animation="border" variant="dark" role="status" />}
    </div>
  );
};

export default Loading;
