import React, { Dispatch, SetStateAction } from 'react';
import { Edit, Trash } from '@styled-icons/fa-solid';
import { Member } from 'types';

interface Props {
  member: Member;
  setDeletingCardId: Dispatch<SetStateAction<string | null>>;
  setEditingCard: Dispatch<SetStateAction<Member | null>>;
}

const FamilyMemberItem = ({ member, setDeletingCardId, setEditingCard }: Props) => (
  <tr className="text-center font-weight-light">
    <td>{member.name}</td>
    <td>{member.email}</td>
    <td>{member.phone}</td>
    <td>{member.cards}</td>
    <td className="d-flex align-items-center justify-content-center">
      <Edit size={22} className="text-primary cursor-pointer mr-2" onClick={() => setEditingCard(member)} />
      <Trash size={20} className="text-danger cursor-pointer" onClick={() => setDeletingCardId(member.id)} />
    </td>
  </tr>
);

export default FamilyMemberItem;
