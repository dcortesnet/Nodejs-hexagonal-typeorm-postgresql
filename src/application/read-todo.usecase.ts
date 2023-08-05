import { TodoEntity } from "../domain/todo.entity";
import { TodoRepository } from "../domain/todo.repository";

export class readTodoUseCase {
  private todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  async execute(): Promise<TodoEntity[]> {
    return await this.todoRepository.read();
  }
}
