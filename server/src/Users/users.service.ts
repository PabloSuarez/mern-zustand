import { Injectable } from '@nestjs/common';
import { User } from 'src/types';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      email: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      email: 'maria',
      password: 'guess',
    },
    {
      userId: 3,
      email: 'test@me.com',
      password: 'guess',
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
