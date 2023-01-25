import { Request, Response, Router } from "express";

const statusRoutes = Router();

statusRoutes.get("/status", (req: Request, res: Response) => {
  res.sendStatus(200);
});

export default statusRoutes;
