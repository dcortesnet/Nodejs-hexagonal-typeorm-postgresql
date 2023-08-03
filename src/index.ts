import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Typescript");
});

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});
