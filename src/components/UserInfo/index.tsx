import Container from 'react-bootstrap/Container';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { User } from 'types/User';

interface Props {
  user: User;
}

const UserInfo = ({ user }: Props) => {
  const { t } = useTranslation();

  return (
    <Container className="d-flex flex-column  align-items-center text-center">
      <h6>
        {t('login')}: {user.login}
      </h6>
      <h6>
        {t('password')}: {user.password}
      </h6>
    </Container>
  );
};

export default UserInfo;
