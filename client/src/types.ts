export type UserStatus = 'active' | 'banned' | 'deleted' | 'blocked';
export type UserRole = 'admin' | 'client' | 'manager' | 'subscriber';

export type User = {
  userId: number;
  email: string;
  password: string;
  photoUrl?: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  role: UserRole;
  status: UserStatus;
};

// export {};
// declare global {
//   interface ImportMetaEnv {
//     VITE_APP_TITLE: string;
//     VITE_PORT: number;
//     VITE_PROXY: string;
//     VITE_ADMIN_VERSION: string;
//   }
// }
