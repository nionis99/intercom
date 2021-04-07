import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';

import LayoutContainer from 'components/Layout';

const DashboardPage = () => {
  useTranslation();

  return (
    <LayoutContainer className="h-100 justify-content-center">
      <Container className="d-flex flex-column align-items-center justify-content-center display-4 text-primary">
        <img src="/images/logo.png" className="mb-4" />
        <small className="text-center mx-4">
          <Trans i18nKey="welcome">
            <b className="text-secondary" />
          </Trans>
        </small>
      </Container>
    </LayoutContainer>
  );
};

export default DashboardPage;
