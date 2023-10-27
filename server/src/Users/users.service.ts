import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/types';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

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

  async create(user: CreateUserDto): Promise<User> {
    return this.usersRepository.save(user);
  }

  async delete(id: string) {
    return this.usersRepository.delete(id);
  }
}
