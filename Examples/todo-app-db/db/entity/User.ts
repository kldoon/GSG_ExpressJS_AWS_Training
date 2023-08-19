import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Todo } from "./Todo.js";


@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ length: 50, nullable: false })
  userName: string

  @Column({ default: 10000 })
  tokens: number

  @OneToMany(() => Todo, todo => todo.user)
  todos: Todo[]
}
