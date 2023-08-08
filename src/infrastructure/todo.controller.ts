import { Request, Response } from "express";
import { CreateTodoUseCase } from "../application/create-todo.usecase";
import { DeleteTodoUseCase } from "../application/delete-todo.usecase";
import { ReadTodoUseCase } from "../application/read-todo.usecase";
import { UpdateTodoUseCase } from "../application/update-todo.usecase";
import { TodoRepository } from "../domain/todo.repository";
import { CreateTodoDTO } from "./dto/create-todo.dto";
import { UpdateTodoDTO } from "./dto/update-todo.dto";

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

  create = async (request: Request, response: Response) => {
    try {
      const description = request.body?.description;
      if (!description) {
        return response
          .status(400)
          .json({ message: "The description field is required" });
      }
      const todoData = new CreateTodoDTO(description);
      const createdTodo = await this.createTodoUseCase.execute(todoData);
      return response.status(201).json({ todo: createdTodo });
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  };

  read = async (request: Request, response: Response) => {
    try {
      const todos = await this.readTodoUseCase.execute();
      return response.status(200).json({ todos });
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  };

  update = async (request: Request, response: Response) => {
    try {
      const uuid = request.params?.uuid;
      if (!uuid) {
        return response
          .status(400)
          .json({ message: "The UUID params is required" });
      }
      const completed = request.body?.completed;
      const description = request.body?.description;
      let todoData = new UpdateTodoDTO(description, completed);
      todoData = Object.fromEntries(
        Object.entries(todoData).filter(([key, value]) => value !== undefined)
      );
      const updatedTodo = await this.updateTodoUseCase.execute(uuid, todoData);
      return response.status(200).json({ todo: updatedTodo });
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  };

  delete = (request: Request, response: Response) => {
    return response.json({ message: "delete" });
  };
}
