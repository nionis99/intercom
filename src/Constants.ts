export const DEFAULT_LANGUAGE = 'lt';
export const DEFAULT_MEMBER_NAME = 'user';

export const API = 'http://intercom.ntt.lt:80/api';
export const API_VERSION = 'v1';
export const BACKEND_URL = `${API}/${API_VERSION}`;

export const USER_URL = `${BACKEND_URL}/user_owner`;
export const USERS = `${BACKEND_URL}/user_admin`;
export const GET_USERS = `${USERS}/items`;
export const AUTH_URL = `${BACKEND_URL}/auth`;
export const MEMBERS = `${BACKEND_URL}/account_owner`;
export const ADMIN_MEMBERS = `${BACKEND_URL}/account_admin`;
export const GET_ADMIN_MEMBERS = `${ADMIN_MEMBERS}/items`;
export const GET_MEMBERS = `${MEMBERS}/items`;
export const GET_DOORS = `${BACKEND_URL}/door_owner/items`;
export const GET_ADMIN_DOORS = `${BACKEND_URL}/door_admin/items`;
export const GET_OWNER_PLACES = `${BACKEND_URL}/flat_owner/items`;
export const GET_ADMIN_PLACES = `${BACKEND_URL}/flat_admin/items`;
export const GET_CARD_TYPES = `${BACKEND_URL}/card_type/items`;
export const CARDS = `${BACKEND_URL}/card_owner`;
export const ADMIN_CARDS = `${BACKEND_URL}/card_admin`;
export const GET_CARDS = `${CARDS}/items`;
export const GET_ADMIN_CARDS = `${CARDS}/items`;
