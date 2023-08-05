import { Router } from "express";
import { TodoController } from "./todo.controller";
import { TodoRepositoryImpl } from "./database/todo.repository";
import { AppDataSource } from "./database/connection";

const router = Router();
const todoRepository = new TodoRepositoryImpl(AppDataSource);
const todoController = new TodoController(todoRepository);

router.post("/todos", todoController.create);
router.get("/todos", todoController.read);
router.patch("/todos", todoController.update);
router.delete("/todos", todoController.delete);

export default router;
