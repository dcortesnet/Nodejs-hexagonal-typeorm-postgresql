import { DataSource } from "typeorm";
import { databaseConfig } from "../../config";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: databaseConfig.host,
  port: databaseConfig.port,
  username: databaseConfig.username,
  password: databaseConfig.password,
  database: databaseConfig.database,
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});
