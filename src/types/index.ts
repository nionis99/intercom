export type Equipment = {
  title: string;
  model: string;
  type: string;
  status: boolean;
};

export interface DateTime {
  create_time: string;
  update_time: string;
}

export type Maybe<T> = T | null;
