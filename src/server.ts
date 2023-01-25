import express, { Request, Response } from "express";
import userRoutes from "./routes/user.routes";
const app = express();

app.use(express.json());

app.use(userRoutes);

app.listen(3333, () => {
  console.log("Server is running!");
});
