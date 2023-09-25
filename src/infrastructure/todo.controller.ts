import { Request, Response } from "express";
import { CreateTodoUseCase } from "../application/create-todo.usecase";
import { DeleteTodoUseCase } from "../application/delete-todo.usecase";
import { ReadTodoUseCase } from "../application/read-todo.usecase";
import { UpdateTodoUseCase } from "../application/update-todo.usecase";
import { CreateTodoDTO } from "./dto/create-todo.dto";
import { UpdateTodoDTO } from "./dto/update-todo.dto";

export class TodoController {
  private createTodoUseCase: CreateTodoUseCase;
  private deleteTodoUseCase: DeleteTodoUseCase;
  private readTodoUseCase: ReadTodoUseCase;
  private updateTodoUseCase: UpdateTodoUseCase;

  constructor(
    createTodoUseCase: CreateTodoUseCase,
    deleteTodoUseCase: DeleteTodoUseCase,
    readTodoUseCase: ReadTodoUseCase,
    updateTodoUseCase: UpdateTodoUseCase
  ) {
    this.createTodoUseCase = createTodoUseCase;
    this.deleteTodoUseCase = deleteTodoUseCase;
    this.readTodoUseCase = readTodoUseCase;
    this.updateTodoUseCase = updateTodoUseCase;
  }

  async create(request: Request, response: Response) {
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
  }

  async read(request: Request, response: Response) {
    try {
      const todos = await this.readTodoUseCase.execute();
      return response.status(200).json({ todos });
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }

  async update(request: Request, response: Response) {
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
  }

  async delete(request: Request, response: Response) {
    try {
      const uuid = request.params?.uuid;
      if (!uuid) {
        return response
          .status(400)
          .json({ message: "The UUID params is required" });
      }
      await this.deleteTodoUseCase.execute(uuid);
      return response.status(200).json({ message: "Resource deleted success" });
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }
}
