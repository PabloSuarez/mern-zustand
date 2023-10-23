import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/database/database.module';
import { UsersProviders } from './users.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...UsersProviders, UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
