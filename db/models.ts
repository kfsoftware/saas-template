import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {
  @PrimaryGeneratedColumn("uuid")
  id!: string;
  @Column()
  title!: string;
  @Column()
  completed!: boolean;
}
