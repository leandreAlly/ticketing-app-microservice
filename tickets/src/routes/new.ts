import expres, { Request, Response } from "express";
import { requireAuth } from "@ally-tickets/common";

const router = expres.Router();

router.post("/api/tickets", requireAuth, (req: Request, res: Response) => {
  res.sendStatus(200);
});

export { router as createTicketRouter };
