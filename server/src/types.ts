export type UserStatus = 'active' | 'banned' | 'deleted' | 'blocked';
export type UserRole = 'admin' | 'client' | 'manager' | 'subscriber';

export type User = {
  userId: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
  photoUrl?: string;
  deletedAt?: Date;
  role?: UserRole;
  status?: UserStatus;
};
