import React from 'react';
import Door from 'types/Door';
import { Edit } from '@styled-icons/fa-solid';

interface Props {
  door: Door;
  isAdmin: boolean;
}

const DoorItem = ({ door, isAdmin }: Props) => (
  <tr className="text-center font-weight-light">
    <td>{door.name}</td>
    <td>{door.type}</td>
    <td>{door.project}</td>
    <td>{door.note || '-'}</td>
    {isAdmin && (
      <td>
        <Edit size={20} className="text-primary cursor-pointer" onClick={() => console.log('edit scenarios')} />
      </td>
    )}
  </tr>
);

export default DoorItem;
