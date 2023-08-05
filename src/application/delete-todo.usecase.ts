import { TodoEntity } from "../domain/todo.entity";
import { TodoRepository } from "../domain/todo.repository";

export class deleteTodoUseCase {
  private todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  async execute(uuid: string): Promise<string | Error> {
    const existingTodo = await this.todoRepository.readTodoByUUID(uuid);
    if (!existingTodo) {
      return new Error("Todo does not exist");
    }
    await this.todoRepository.delete(uuid);
    return uuid;
  }
}
