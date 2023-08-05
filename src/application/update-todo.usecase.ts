import { TodoEntity } from "../domain/todo.entity";
import { TodoRepository } from "../domain/todo.repository";

export class updateTodoUseCase {
  private todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  async execute(
    uuid: string,
    updatedData: Partial<TodoEntity>
  ): Promise<TodoEntity | Error> {
    const existingTodo = await this.todoRepository.readTodoByUUID(uuid);
    if (!existingTodo) {
      return new Error("Todo does not exist");
    }
    const updatedTodoData = { ...existingTodo, ...updatedData };
    const updatedTodo = await this.todoRepository.update(uuid, updatedTodoData);
    return updatedTodo;
  }
}
