import { Todo } from "./todo";

export interface TodoRepository {
  createTodo(todo: Todo): Promise<Todo>;
  readTodoByUUID(uuid: string): Promise<Todo>;
  readTodo(): Promise<Todo[]>;
  updateTodo(uuid: string, todo: Todo): Promise<Todo>;
  deleteTodo(uuid: string): Promise<void>;
}
