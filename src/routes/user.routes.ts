import { Request, Response, Router } from "express";

const userRoutes = Router();

userRoutes.get("/", (req: Request, res: Response) => {
  const users = [{ username: "Breno" }];

  res.status(200).send(users);
});

userRoutes.get(
  "/user/:uuid",
  (req: Request<{ uuid: string }>, res: Response) => {
    const uuid = req.params.uuid;

    res.status(200).send({ uuid });
  }
);

userRoutes.post("/user", (req: Request, res: Response) => {
  const newUser = req.body;

  res.status(201).send({ newUser });
});

userRoutes.put("/user/:uuid", (req: Request, res: Response) => {
  const uuid = req.params.uuid;
  const modifierUser = req.body;

  res.status(200).send(modifierUser);
});

userRoutes.delete("/user/:uuid", (req: Request, res: Response) => {
  const uuid = req.params.uuid;

  res.sendStatus(200);
});

export default userRoutes;
