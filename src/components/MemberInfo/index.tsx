import React from 'react';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';

import EmptyDataView from 'components/EmptyDataView';
import Member from 'types/Member';
import { Maybe } from 'types';

interface Props {
  member: Maybe<Member>;
}

const MemberInfo = ({ member }: Props) => {
  const { t } = useTranslation();

  if (!member?.id) return <EmptyDataView text={t('no_member')} />;

  return (
    <Col
      xl={4}
      lg={5}
      md={6}
      sm={7}
      xs={8}
      className="d-flex w-100 flex-column col-lg-5 col-md-6 col-xl-4 align-items-center text-center"
    >
      Test
    </Col>
  );
};

export default MemberInfo;
