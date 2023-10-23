import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<User>,
  ) {}

  async findOne(email: string): Promise<User> {
    return this.usersRepository.findOneBy({ email });
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
