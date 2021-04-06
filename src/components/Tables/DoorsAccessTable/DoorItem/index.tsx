import React from 'react';
import Door from 'types/Door';

interface Props {
  door: Door;
}

const DoorItem = ({ door }: Props) => (
  <tr className="text-center font-weight-light">
    <td>{door.name}</td>
    <td>{door.type}</td>
    <td>{door.project}</td>
    <td>{door.note}</td>
  </tr>
);

export default DoorItem;
