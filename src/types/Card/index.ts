import { DateTime } from '../index';

export default interface Card extends DateTime {
  id: number;
  account_id: string;
  account: string;
  card_no: string;
  note: string;
  type_id: number;
  type: string;
}
