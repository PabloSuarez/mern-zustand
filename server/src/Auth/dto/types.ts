import { User } from 'src/types';

export type LoginPayload = Pick<User, 'email' | 'password'>;

export interface RegisterPayload
  extends LoginPayload,
    Pick<User, 'firstName' | 'lastName'> {}
