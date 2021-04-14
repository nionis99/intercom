import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useStateSelector } from 'hooks/useReduxStateSelector';
import { updateFlatUser } from 'redux/actions/FlatUsers';
import FlatUserForm, { FlatUserFormInputs } from 'components/Forms/FlatUserForm';
import ModalContainer from 'components/Modals';
import FlatUser from 'types/FlatUser';

interface Props {
  show: boolean;
  editingFlatUser: FlatUser;
  handleClose: () => void;
}

const EditFlatUserModal = ({ show, editingFlatUser, handleClose }: Props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { updateLoading } = useStateSelector((state) => state.flatUsers);

  const responseText = t('flat_user_updated');

  const onSubmit = async (data: FlatUserFormInputs) => {
    await dispatch(updateFlatUser(data, editingFlatUser.id, responseText));
    handleClose();
  };

  return (
    <ModalContainer title={t('edit_member')} isActive={show} centered handleClose={handleClose}>
      <div className="h-100 w-100 d-flex">
        <FlatUserForm
          onSubmit={onSubmit}
          editingFlatUser={editingFlatUser}
          loading={updateLoading}
          handleClose={handleClose}
        />
      </div>
    </ModalContainer>
  );
};

export default EditFlatUserModal;
