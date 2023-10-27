import { Controller, Delete, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/types';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    const user = this.usersService.delete(id);
    return user;
  }

  @Get()
  listUser(): Promise<User[]> {
    const users = this.usersService.findAll();
    return users;
  }
}
