import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import { useStateSelector } from 'hooks/useReduxStateSelector';
import { getMember } from 'redux/actions/Member';
import LayoutContainer from 'components/Layout';
import MemberInfo from 'components/MemberInfo';

interface MemberRouteParams {
  memberId: string;
}

const MemberPage = () => {
  const dispatch = useDispatch();
  const { memberId } = useParams<MemberRouteParams>();
  const { memberLoading, memberData } = useStateSelector((state) => state.member);

  useEffect(() => {
    dispatch(getMember(memberId));
  }, [dispatch, memberId]);

  return (
    <LayoutContainer loading={memberLoading}>
      <Card.Header className="d-flex align-items-center font-weight-bold">{memberData?.name}</Card.Header>
      <Card.Body className="h-100 overflow-auto">
        <MemberInfo member={memberData} />
      </Card.Body>
    </LayoutContainer>
  );
};

export default MemberPage;
