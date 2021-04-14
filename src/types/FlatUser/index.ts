import { DateTime } from 'types';

export default interface FlatUser extends DateTime {
  id: number;
  flat_id: number;
  is_active: boolean;
  login: string;
  password: string;
  role: string;
  role_id: string;
}
