import { DataSource } from "typeorm";
import { TodoEntity } from "./todo.entity";
import { TodoRepository } from "../../domain/todo.repository";
import { Todo } from "../../domain/todo";

export class TodoRepositoryImpl implements TodoRepository {
  private repository;

  constructor(dataSource: DataSource) {
    this.repository = dataSource.getRepository(TodoEntity);
  }

  async createTodo(todo: Todo): Promise<Todo> {
    return await this.repository.save(todo);
  }

  async readTodo(): Promise<Todo[]> {
    return await this.repository.find();
  }

  async updateTodo(uuid: string, todo: Todo): Promise<Todo> {
    const existingTodo = await this.repository.findOne({ where: { uuid } });
    if (!existingTodo) {
      throw new Error("Todo not found.");
    }
    const updatedTodoData = Object.assign(existingTodo, todo);
    await this.repository.update({ uuid }, updatedTodoData);
    return updatedTodoData;
  }

  async deleteTodo(uuid: string): Promise<void> {
    await this.repository.delete({ uuid });
  }

  async readTodoByUUID(uuid: string): Promise<Todo> {
    const existingTodo = await this.repository.findOne({ where: { uuid } });
    if (!existingTodo) {
      throw new Error("Todo not found.");
    }
    return existingTodo;
  }
}
