import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { useStateSelector } from 'hooks/useReduxStateSelector';
import EmptyDataView from 'components/EmptyDataView';
import MemberInfoButtons from 'components/Buttons/MemberInfoButtons';
import CardsListTable from 'components/Tables/CardsTable';
import ChangePinCodeModal from 'components/Modals/ChangePinCode';
import ChangeContactsModal from 'components/Modals/ChangeContacts';
import CreateCardModal from 'components/Modals/CreateCard';
import { getCards } from 'redux/actions/Cards';
import { Maybe } from 'types';
import Member from 'types/Member';
import { useParams } from 'react-router-dom';

interface MemberRouteParams {
  memberId: string;
}

interface Props {
  member: Maybe<Member>;
}

const MemberInfo = ({ member }: Props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { memberId } = useParams<MemberRouteParams>();
  const { cardsLoading, cardsData } = useStateSelector((state) => state.cards);
  const [showCreateCardModal, setShowCreateCardModal] = useState(false);
  const [showEditContactsModal, setShowEditContactsModal] = useState(false);
  const [showChangePinCodeModal, setShowChangePinCodeModal] = useState(false);

  useEffect(() => {
    dispatch(getCards(memberId));
  }, [dispatch, memberId]);

  if (!member?.id) return <EmptyDataView text={t('no_member')} />;

  return (
    <div className="d-flex h-100">
      <CreateCardModal show={showCreateCardModal} handleClose={() => setShowCreateCardModal(false)} />
      <ChangePinCodeModal
        show={showChangePinCodeModal}
        memberId={parseInt(memberId)}
        pinCode={member.pin}
        handleClose={() => setShowChangePinCodeModal(false)}
      />
      <ChangeContactsModal
        show={showEditContactsModal}
        memberId={parseInt(memberId)}
        name={member.name}
        email={member.email}
        phone={member.phone}
        handleClose={() => setShowEditContactsModal(false)}
      />
      <Container className="d-flex flex-column h-100">
        <Row>
          <div className="d-flex justify-content-center col-lg-6 my-4 p-0">
            <Container className="d-flex flex-column  align-items-center text-center">
              <h6>
                {t('email')}: {member.email || '-'}
              </h6>
              <h6>
                {t('phone')}: {member.phone || '-'}
              </h6>
              <h6>
                {t('pin')}: {member.pin || '-'}
              </h6>
              <h6>
                {t('cards')}: {cardsData.length}
              </h6>
            </Container>
          </div>
          <div className="d-flex justify-content-center align-items-center col-lg-6 my-4">
            <MemberInfoButtons
              setShowChangePinCodeModal={setShowChangePinCodeModal}
              setShowCreateCardModal={setShowCreateCardModal}
              setShowEditContactsModal={setShowEditContactsModal}
            />
          </div>
        </Row>
        <CardsListTable cardsLoading={cardsLoading} cardsData={cardsData} />
      </Container>
    </div>
  );
};

export default MemberInfo;
