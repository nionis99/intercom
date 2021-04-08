import React, { Dispatch, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Table from 'react-bootstrap/Table';

import { useAppState } from 'contexts';
import LoadingView from 'components/Loading';
import EmptyDataView from 'components/EmptyDataView';
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
}

const MembersListTable = ({ loading, membersData, isOpenCreateMemberModal, setIsOpenCreateMemberModal }: Props) => {
  const { t } = useTranslation();
  const { isAdmin } = useAppState();
  const [deletingMemberId, setDeletingMemberId] = useState<number | null>(null);
  const [editingMember, setEditingMember] = useState<Member | null>(null);

  if (loading) return <LoadingView />;

  if (membersData.length === 0) {
    return <EmptyDataView text={t('no_members')} centered />;
  }

  return (
    <div className="overflow-auto">
      <CreateMemberModal show={isOpenCreateMemberModal} handleClose={() => setIsOpenCreateMemberModal(false)} />
      <Table borderless hover responsive="sm">
        <thead>
          <tr className="text-center">
            <th className="font-weight-normal">{t('is_active')}</th>
            <th className="font-weight-normal">{t('name')}</th>
            <th className="font-weight-normal">{t('email')}</th>
            <th className="font-weight-normal">{t('phone')}</th>
            {isAdmin && <th className="font-weight-normal">{t('is_owner')}</th>}
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
              isAdmin={isAdmin}
            />
          ))}
        </tbody>
      </Table>
      {!!editingMember && (
        <EditMemberModal
          show={!!editingMember}
          editingMember={editingMember}
          handleClose={() => setEditingMember(null)}
        />
      )}
      <DeleteMemberConfirmation
        title={t('delete_member')}
        deletingMemberId={deletingMemberId}
        confirmText={t('delete')}
        handleClose={() => setDeletingMemberId(null)}
      />
    </div>
  );
};

export default MembersListTable;
