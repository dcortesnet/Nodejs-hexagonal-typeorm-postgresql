import { Todo } from "../domain/todo";
import { TodoRepository } from "../domain/todo.repository";

export class readTodoUseCase {
  private todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  async execute(): Promise<Todo[]> {
    return await this.todoRepository.read();
  }
}
