import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useStateSelector } from 'hooks/useReduxStateSelector';
import { updateMember } from 'redux/actions/Member';
import MemberForm, { MemberFormInputs } from 'components/Forms/MemberForm';
import ModalContainer from 'components/Modals';
import Member from 'types/Member';

interface Props {
  show: boolean;
  editingMember: Member;
  handleClose: () => void;
}

const EditMemberModal = ({ show, editingMember, handleClose }: Props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { updateLoading } = useStateSelector((state) => state.members);

  const responseText = t('member_updated');

  const onSubmit = async (data: MemberFormInputs) => {
    await dispatch(updateMember(data, editingMember.id, responseText));
    handleClose();
  };

  return (
    <ModalContainer title={t('edit_member')} isActive={show} centered handleClose={handleClose}>
      <div className="h-100 w-100 d-flex">
        <MemberForm
          onSubmit={onSubmit}
          editingMember={editingMember}
          loading={updateLoading}
          handleClose={handleClose}
        />
      </div>
    </ModalContainer>
  );
};

export default EditMemberModal;
