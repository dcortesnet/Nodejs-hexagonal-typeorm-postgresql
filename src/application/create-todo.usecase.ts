import { TodoEntity } from "../domain/todo.entity";
import { TodoRepository } from "../domain/todo.repository";

export class CreateTodoUseCase {
  private todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  async execute(todoData: Partial<TodoEntity>): Promise<TodoEntity> {
    const { description } = todoData;
    if (description === undefined) {
      throw new Error("Description is missing");
    }
    const newTodo = new TodoEntity(description);
    const createdTodo = await this.todoRepository.create(newTodo);
    return createdTodo;
  }
}
