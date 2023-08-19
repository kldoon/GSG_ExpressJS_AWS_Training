import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Todo } from "./Todo.js";

@Entity()
export class Tag extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 255 })
  label: string;

  @ManyToMany(() => Todo, todo => todo.tags)
  todos: Todo[]
}