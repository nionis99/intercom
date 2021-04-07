import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useTranslation } from 'react-i18next';
// import { PersonAdd } from 'styled-icons/material-rounded';
import Card from 'react-bootstrap/Card';

// import { useStateSelector } from 'hooks/useReduxStateSelector';
import LayoutContainer from 'components/Layout';
// import MembersListTable from 'components/Tables/MembersTable';
//
// interface MemberRouteParams {
//   memberId: string;
// }

const MemberPage = () => {
  // const dispatch = useDispatch();
  // const { t } = useTranslation();
  // const { memberId } = useRouteParams<MemberRouteParams>();
  // const { memberLoading, memberData } = useStateSelector((state) => state.member);

  // useEffect(() => {
  //   dispatch(getMember(memberId));
  // }, [dispatch, memberId]);

  return (
    <LayoutContainer>
      <Card.Header className="d-flex align-items-center font-weight-bold"></Card.Header>
      <Card.Body className="h-100 overflow-auto"></Card.Body>
    </LayoutContainer>
  );
};

export default MemberPage;
