import { DateTime } from '../index';

export enum UserRoleEnum {
  OWNER = 'owner',
  ADMIN = 'admin',
}

export interface User extends DateTime {
  id: number;
  login: string;
  password: string;
  role_id: number;
  role: UserRoleEnum;
}
