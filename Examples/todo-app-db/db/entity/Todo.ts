import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  Index
} from "typeorm";
import { User } from "./User.js";
import { Tag } from "./Tag.js";

@Index("id_title_index", ['id', 'title'])
@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.todos,
    {
      eager: false,
      onDelete: 'CASCADE',  // SET NULL// RESTRICT
      onUpdate: 'CASCADE'
    }
  )
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

  @Index("status_index")
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
