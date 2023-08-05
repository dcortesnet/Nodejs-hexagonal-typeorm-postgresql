import { Todo } from "../domain/todo";
import { TodoRepository } from "../domain/todo.repository";

export class UpdateTodoUseCase {
  private todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  async execute(
    uuid: string,
    updatedData: Partial<Todo>
  ): Promise<Todo | Error> {
    const existingTodo = await this.todoRepository.readTodoByUUID(uuid);
    if (!existingTodo) {
      return new Error("Todo does not exist");
    }
    const updatedTodoData = { ...existingTodo, ...updatedData };
    const updatedTodo = await this.todoRepository.updateTodo(
      uuid,
      updatedTodoData
    );
    return updatedTodo;
  }
}
