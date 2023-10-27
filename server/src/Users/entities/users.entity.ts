import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column({
    default: () => 'now()',
  })
  createdAt: Date;

  @Column({
    default: () => 'now()',
  })
  updatedAt: Date;

  @Column({
    nullable: true,
  })
  deletedAt: Date;
}
