import { TodoEntity } from "./todo.entity";

export interface TodoRepository {
  create(todo: TodoEntity): Promise<TodoEntity>;
  readTodoByUUID(uuid: string): Promise<TodoEntity>;
  read(): Promise<TodoEntity[]>;
  update(uuid: string, todo: TodoEntity): Promise<TodoEntity>;
  delete(uuid: string): Promise<void>;
}
