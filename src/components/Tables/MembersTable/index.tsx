import React, { Dispatch, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Table from 'react-bootstrap/Table';

import LoadingView from 'components/Loading';
import DeleteMemberConfirmation from 'components/Modals/Confirmation/Delete/Member';
import CreateMemberModal from 'components/Modals/CreateMember';
import EditMemberModal from 'components/Modals/EditMember';
import MemberItem from './MemberItem';
import Member from 'types/Member';

interface Props {
  loading: boolean;
  membersData: Member[];
  isOpenCreateMemberModal: boolean;
  setIsOpenCreateMemberModal: Dispatch<SetStateAction<boolean>>;
  isAdminRoute: boolean;
}

const MembersListTable = ({
  loading,
  membersData,
  isOpenCreateMemberModal,
  setIsOpenCreateMemberModal,
  isAdminRoute,
}: Props) => {
  const { t } = useTranslation();
  const [deletingMemberId, setDeletingMemberId] = useState<number | null>(null);
  const [editingMember, setEditingMember] = useState<Member | null>(null);

  if (loading) return <LoadingView />;

  return (
    <div className="overflow-auto">
      <CreateMemberModal
        show={isOpenCreateMemberModal}
        handleClose={() => setIsOpenCreateMemberModal(false)}
        isAdminRoute={isAdminRoute}
      />
      <Table borderless hover responsive="sm">
        <thead>
          <tr className="text-center">
            <th className="font-weight-normal">{t('is_active')}</th>
            <th className="font-weight-normal">{t('name')}</th>
            <th className="font-weight-normal">{t('email')}</th>
            <th className="font-weight-normal">{t('phone')}</th>
            {isAdminRoute && <th className="font-weight-normal">{t('is_owner')}</th>}
            <th className="font-weight-normal">{t('pin')}</th>
            <th className="font-weight-normal">{t('note')}</th>
            <th className="font-weight-normal">{t('actions')}</th>
          </tr>
        </thead>
        <tbody>
          {membersData.map((member) => (
            <MemberItem
              key={member.id}
              member={member}
              setDeletingMemberId={setDeletingMemberId}
              setEditingMember={setEditingMember}
              isAdminRoute={isAdminRoute}
            />
          ))}
        </tbody>
      </Table>
      {!!editingMember && (
        <EditMemberModal
          show={!!editingMember}
          editingMember={editingMember}
          handleClose={() => setEditingMember(null)}
          isAdminRoute={isAdminRoute}
        />
      )}
      <DeleteMemberConfirmation
        title={t('delete_member')}
        deletingMemberId={deletingMemberId}
        confirmText={t('delete')}
        handleClose={() => setDeletingMemberId(null)}
        isAdminRoute={isAdminRoute}
      />
    </div>
  );
};

export default MembersListTable;
