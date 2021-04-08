import React, { Dispatch, SetStateAction } from 'react';
import { Edit, Trash } from '@styled-icons/fa-solid';

import Card from 'types/Card';

interface Props {
  card: Card;
  setDeletingCardId: Dispatch<SetStateAction<number | null>>;
  setEditingCard: Dispatch<SetStateAction<Card | null>>;
}

const CardItem = ({ card, setDeletingCardId, setEditingCard }: Props) => (
  <tr className="text-center font-weight-light">
    <td>{card.type}</td>
    <td>{card.card_no}</td>
    <td>{card.note}</td>
    <td className="d-flex justify-content-center">
      <Edit size={20} className="text-primary cursor-pointer mr" onClick={() => setEditingCard(card)} />
      <Trash size={20} className="text-danger cursor-pointer ml-2" onClick={() => setDeletingCardId(card.id)} />
    </td>
  </tr>
);

export default CardItem;
