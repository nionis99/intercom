import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Edit, Trash } from '@styled-icons/fa-solid';
import { CircleFill } from '@styled-icons/bootstrap';

import { DEFAULT_MEMBER_NAME } from 'Constants';
import Member from 'types/Member';

interface Props {
  member: Member;
  setDeletingMemberId: Dispatch<SetStateAction<number | null>>;
  setEditingMember: Dispatch<SetStateAction<Member | null>>;
  isAdmin: boolean;
}

const MemberItem = ({ member, setDeletingMemberId, setEditingMember, isAdmin }: Props) => {
  const { t } = useTranslation();

  return (
    <tr className="text-center font-weight-light">
      <td className="d-flex justify-content-center">
        <CircleFill size={18} color={member.is_active ? 'Green' : 'Red'} />
      </td>

      <td>
        <Link to={`members/${member.id}`} className="text-decoration-none">
          {member.name || t(DEFAULT_MEMBER_NAME)}{' '}
        </Link>
      </td>

      <td>{member.email || '-'}</td>
      <td>{member.phone || '-'}</td>
      {isAdmin && (
        <td className="d-flex justify-content-center">
          <CircleFill size={18} color={member.is_owner ? 'Green' : 'Red'} />
        </td>
      )}
      <td>{member.pin || '-'}</td>
      <td>{member.note || '-'}</td>
      <td className="d-flex justify-content-center">
        <Edit size={20} className="text-primary cursor-pointer mr" onClick={() => setEditingMember(member)} />
        {!member.is_owner && (
          <Trash size={20} className="text-danger cursor-pointer ml-2" onClick={() => setDeletingMemberId(member.id)} />
        )}
      </td>
    </tr>
  );
};

export default MemberItem;
