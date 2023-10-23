import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import AuthGuard from './auth.guard';
import { LoginPayload, RegisterPayload } from './dto/types';
import { IsPublic } from 'src/decorators/public.decorator';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('register')
  register(@Body() registerDto: RegisterPayload) {
    return this.authService.register(registerDto.email, registerDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginDto: LoginPayload) {
    return this.authService.login(loginDto.email, loginDto.password);
  }

  @Get('profile')
  getProfile(@Request() req) {
    const user = this.usersService.findOne(req.user.email);
    return user;
  }
}
