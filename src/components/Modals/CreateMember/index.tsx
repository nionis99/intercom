import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { useUserState } from 'contexts/User';
import { useStateSelector } from 'hooks/useReduxStateSelector';
import { createMember } from 'redux/actions/Members';
import ModalContainer from 'components/Modals';
import MemberForm, { MemberFormInputs } from 'components/Forms/MemberForm';

interface Props {
  show: boolean;
  handleClose: () => void;
}

const CreateMemberModal = ({ show, handleClose }: Props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { selectedFlatId } = useUserState();
  const { createLoading } = useStateSelector((state) => state.members);

  const responseText = t('member_created');

  const onSubmit = async (data: MemberFormInputs) => {
    await dispatch(createMember({ ...data, flat_id: parseInt(selectedFlatId || '') }, responseText));
    handleClose();
  };

  if (!show) return null;

  return (
    <ModalContainer title={t('create_member')} isActive={show} centered handleClose={handleClose}>
      <div className="h-100 w-100 d-flex">
        <MemberForm onSubmit={onSubmit} loading={createLoading} handleClose={handleClose} />
      </div>
    </ModalContainer>
  );
};

export default CreateMemberModal;
