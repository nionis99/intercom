import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft } from 'styled-icons/boxicons-solid';
import Card from 'react-bootstrap/Card';

import { useStateSelector } from 'hooks/useReduxStateSelector';
import LayoutContainer from 'components/Layout';
import MemberInfo from 'components/MemberInfo';
import { getMember } from 'redux/actions/Member';
import { DEFAULT_MEMBER_NAME } from 'Constants';

interface MemberRouteParams {
  memberId: string;
}

const MemberPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { memberId } = useParams<MemberRouteParams>();
  const { memberLoading, memberData } = useStateSelector((state) => state.member);

  useEffect(() => {
    dispatch(getMember(memberId));
  }, [dispatch, memberId]);

  return (
    <LayoutContainer loading={memberLoading}>
      <Card.Header className="d-flex align-items-center font-weight-bold">
        <Link to="/members">
          <ChevronLeft className="d-flex justify-content-start" size={24} />
        </Link>
        <span className="d-flex w-100 justify-content-center ">{memberData?.name || t(DEFAULT_MEMBER_NAME)}</span>
      </Card.Header>
      <Card.Body className="h-100 overflow-auto">
        <MemberInfo member={memberData} />
      </Card.Body>
    </LayoutContainer>
  );
};

export default MemberPage;
