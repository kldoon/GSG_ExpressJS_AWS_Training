import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable
} from "typeorm";
import { User } from "./User.js";
import { Tag } from "./Tag.js";

@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.todos, { eager: false })
  user: number;

  @Column({
    length: 50,
    nullable: false  // Required
  })
  title: string;

  @Column({
    default: 'No description'
  })
  description: string;

  @Column({
    type: 'enum',
    enum: ['new', 'done'],
    default: 'new'
  })
  status: 'new' | 'done';

  @CreateDateColumn({
    type: 'timestamp',
    default: () => "CURRENT_TIMESTAMP()"
  })
  createdAt: Date;

  @ManyToMany(() => Tag, { cascade: true, eager: true })
  @JoinTable()
  tags: Tag[]
}
