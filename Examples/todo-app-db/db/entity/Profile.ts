import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'text', nullable: false })
  bio: string;

  @Column({ type: 'text' })
  imageURL: string;
}