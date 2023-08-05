export class TodoEntity {
  uuid: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(description: string) {
    this.uuid = generateId();
    this.description = description;
    this.completed = false;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

function generateId(): string {
  return String(Date.now());
}
