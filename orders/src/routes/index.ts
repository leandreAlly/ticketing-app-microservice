import express, { Request, Response } from "express";

const router = express.Router();

router.get("/api/orders", (req: Request, res: Response) => {
  res.send({});
});

export { router as indexOrderRouter };
