import express, { Request, Response } from "express";
import { Ticket } from "../models/tickets";
import { NotFoundError } from "@ally-tickets/common";

const router = express.Router();

router.get("/api/tickets/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const ticket = await Ticket.findById(id);

  if (!ticket) {
    throw new NotFoundError();
  }

  return res.send(ticket);
});

export { router as showTicketRouter };
