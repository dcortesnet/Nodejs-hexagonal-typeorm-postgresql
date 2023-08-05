import { Todo } from "../domain/todo";
import { TodoRepository } from "../domain/todo.repository";

export class CreateTodoUseCase {
  private todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  async execute(todoData: Partial<Todo>): Promise<Todo> {
    const { description } = todoData;
    if (description === undefined) {
      throw new Error("Description is missing");
    }
    const newTodo = new Todo(description);
    const createdTodo = await this.todoRepository.createTodo(newTodo);
    return createdTodo;
  }
}
