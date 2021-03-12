import Container from 'react-bootstrap/Container';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { User } from 'types';

interface Props {
  user: User;
}

const UserInfo = ({ user }: Props) => {
  const { t } = useTranslation();

  return (
    <Container className="d-flex flex-column  align-items-center text-center">
      <h6>
        {t('email')}: {user.email}
      </h6>
      <h6>
        {t('telephone')}: {user.phone}
      </h6>
      <h6>
        {t('pin')}: {user.pinCode}
      </h6>
      <h6>
        {t('family_members')}: {user.familyMembers}
      </h6>
      <h6>
        {t('my_cards')}: {user.myCards}
      </h6>
      <h6>
        {t('my_privileges')}: {user.myPrivileges}
      </h6>
    </Container>
  );
};

export default UserInfo;
