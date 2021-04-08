import { DateTime } from '../index';

export default interface CardType extends DateTime {
  id: number;
  name: string;
  note: string;
}
