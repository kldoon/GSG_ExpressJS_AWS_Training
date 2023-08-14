import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn
} from "typeorm";

@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: number;

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
}
