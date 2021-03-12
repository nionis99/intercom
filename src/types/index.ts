export type Equipment = {
  title: string;
  model: string;
  type: string;
  status: boolean;
};

export type Member = {
  cardId: string;
  code: string;
  status: boolean;
};

export type Contacts = {
  username: string;
  email: string;
  phoneNumber: string;
};

export type User = {
  name: string;
  email: string;
  phone: string;
  pinCode: string;
  familyMembers: number;
  myCards: number;
  myPrivileges: number;
};
