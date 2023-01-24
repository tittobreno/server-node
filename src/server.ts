import express, { Request, Response } from "express";
const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({ message: "Hello" });
});

app.listen(3333, () => {
  console.log("Server is running!");
});
