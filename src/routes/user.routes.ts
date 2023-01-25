import { Request, Response, Router } from "express";

const userRoutes = Router();

userRoutes.get("/", (req: Request, res: Response) => {
  const users = [{ username: "Breno" }];

  res.status(200).send(users);
});

userRoutes.get(
  "user/:uuid",
  (req: Request<{ uuid: string }>, res: Response) => {
    const uuid = req.params.uuid;
  }
);

export default userRoutes;
