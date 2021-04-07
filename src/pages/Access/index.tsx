import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';

import { useUserState } from 'contexts/User';
import { useStateSelector } from 'hooks/useReduxStateSelector';
import DoorsAccessListTable from 'components/Tables/DoorsAccessTable';
import LayoutContainer from 'components/Layout';
import { getDoors } from 'redux/actions/Door';

const AccessScenariosPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { selectedProject } = useUserState();
  const { doorsLoading, doorsData } = useStateSelector((state) => state.doors);

  useEffect(() => {
    dispatch(getDoors(selectedProject || ''));
  }, [dispatch, selectedProject]);

  return (
    <LayoutContainer>
      <Card.Header className="d-flex align-items-center font-weight-bold">{t('access')}</Card.Header>
      <Card.Body className="overflow-auto">
        <DoorsAccessListTable loading={doorsLoading} doorsData={doorsData} />
      </Card.Body>
    </LayoutContainer>
  );
};

export default AccessScenariosPage;
