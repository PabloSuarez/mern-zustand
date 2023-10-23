import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import AuthGuard from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
  // constructor(private usersService: UsersService) {}
}
