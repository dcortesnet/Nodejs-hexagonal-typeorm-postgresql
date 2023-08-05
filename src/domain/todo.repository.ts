import { Todo } from "./todo";

export interface TodoRepository {
  create(todo: Todo): Promise<Todo>;
  readTodoByUUID(uuid: string): Promise<Todo>;
  read(): Promise<Todo[]>;
  update(uuid: string, todo: Todo): Promise<Todo>;
  delete(uuid: string): Promise<void>;
}
