import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Todo } from "../../domain/todo";

@Entity()
export class TodoEntity extends Todo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  uuid!: string;

  @Column()
  description!: string;

  @Column()
  completed!: boolean;

  @Column()
  createdAt!: Date;

  @Column()
  updatedAt!: Date;
}
