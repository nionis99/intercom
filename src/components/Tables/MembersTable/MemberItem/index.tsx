import React, { Dispatch, SetStateAction } from 'react';
import { CircleFill } from '@styled-icons/bootstrap';
import { Edit, Trash } from '@styled-icons/fa-solid';
import { Member } from 'types';

interface Props {
  member: Member;
  setDeletingCardId: Dispatch<SetStateAction<string | null>>;
  setEditingCard: Dispatch<SetStateAction<Member | null>>;
}

const MemberItem = ({ member, setDeletingCardId, setEditingCard }: Props) => (
  <tr key={member.cardId} className="text-center font-weight-light">
    <td>{member.cardId}</td>
    <td>{member.code}</td>
    <td>{<CircleFill color={member.status ? 'green' : 'red'} size={20} />}</td>
    <td className="d-flex align-items-center justify-content-center">
      <Edit size={22} className="text-primary cursor-pointer mr-2" onClick={() => setEditingCard(member)} />
      <Trash size={20} className="text-danger cursor-pointer" onClick={() => setDeletingCardId(member.cardId)} />
    </td>
  </tr>
);

export default MemberItem;
