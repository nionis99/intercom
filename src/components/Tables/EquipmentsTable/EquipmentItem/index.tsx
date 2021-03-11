import { DoorSliding } from 'styled-icons/material-rounded';
import { CircleFill } from '@styled-icons/bootstrap';
import React from 'react';
import { Equipment } from 'types';

interface Props {
  equipment: Equipment;
}

const EquipmentItem = ({ equipment }: Props) => (
  <tr className="text-center font-weight-light">
    <td>{equipment.title}</td>
    <td>{equipment.model}</td>
    <td>
      <DoorSliding size={22} />
    </td>
    <td>
      <CircleFill color={equipment.status ? 'green' : 'red'} size={20} />
    </td>
  </tr>
);

export default EquipmentItem;
