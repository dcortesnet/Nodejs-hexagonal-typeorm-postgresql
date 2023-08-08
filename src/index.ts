import { config } from "dotenv";
import express, { Express, Request, Response } from "express";
import { AppDataSource } from "./infrastructure/database/connection";
import todoRouter from "./infrastructure/todo.router";

config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Typescript");
});

app.use(todoRouter);

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    app.listen(PORT, () => {
      console.log(`Server listen on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
