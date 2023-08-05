import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Todo } from "../../domain/todo";

@Entity()
class TodoEntity extends Todo {
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
