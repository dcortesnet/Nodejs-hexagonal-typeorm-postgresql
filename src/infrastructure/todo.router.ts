import { Router } from "express";
import { TodoController } from "./todo.controller";
import { TodoRepositoryImpl } from "./database/todo.repository";
import { AppDataSource } from "./database/connection";
import { CreateTodoUseCase } from "../application/create-todo.usecase";
import { DeleteTodoUseCase } from "../application/delete-todo.usecase";
import { ReadTodoUseCase } from "../application/read-todo.usecase";
import { UpdateTodoUseCase } from "../application/update-todo.usecase";

const router = Router();
const todoRepository = new TodoRepositoryImpl(AppDataSource);

const createTodoUseCase: CreateTodoUseCase = new CreateTodoUseCase(
  todoRepository
);
const deleteTodoUseCase: DeleteTodoUseCase = new DeleteTodoUseCase(
  todoRepository
);
const readTodoUseCase: ReadTodoUseCase = new ReadTodoUseCase(todoRepository);
const updateTodoUseCase: UpdateTodoUseCase = new UpdateTodoUseCase(
  todoRepository
);

const todoController = new TodoController(
  createTodoUseCase,
  deleteTodoUseCase,
  readTodoUseCase,
  updateTodoUseCase
);

router.post("/todos", todoController.create);
router.get("/todos", todoController.read);
router.patch("/todos/:uuid", todoController.update);
router.delete("/todos/:uuid", todoController.delete);

export default router;
