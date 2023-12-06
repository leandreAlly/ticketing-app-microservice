import expres, { Request, Response } from "express";
import { Ticket } from "../models/tickets";

const router = expres.Router();

router.get("/api/tickets", async (req: Request, res: Response) => {
  const tickets = await Ticket.find({
    orderId: undefined,
  });

  return res.send(tickets);
});

export { router as indexTicketRouter };
