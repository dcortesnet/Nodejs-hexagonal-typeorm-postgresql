import { Request, Response } from "express";
import { CreateTodoUseCase } from "../application/create-todo.usecase";
import { DeleteTodoUseCase } from "../application/delete-todo.usecase";
import { ReadTodoUseCase } from "../application/read-todo.usecase";
import { UpdateTodoUseCase } from "../application/update-todo.usecase";
import { TodoRepository } from "../domain/todo.repository";

export class TodoController {
  private createTodoUseCase: CreateTodoUseCase;
  private deleteTodoUseCase: DeleteTodoUseCase;
  private readTodoUseCase: ReadTodoUseCase;
  private updateTodoUseCase: UpdateTodoUseCase;

  constructor(todoRepository: TodoRepository) {
    this.createTodoUseCase = new CreateTodoUseCase(todoRepository);
    this.deleteTodoUseCase = new DeleteTodoUseCase(todoRepository);
    this.readTodoUseCase = new ReadTodoUseCase(todoRepository);
    this.updateTodoUseCase = new UpdateTodoUseCase(todoRepository);
  }

  create(request: Request, response: Response) {
    return response.json({ message: "create" });
  }

  read(request: Request, response: Response) {
    return response.json({ message: "read" });
  }

  update(request: Request, response: Response) {
    return response.json({ message: "update" });
  }

  delete(request: Request, response: Response) {
    return response.json({ message: "delete" });
  }
}
