import express, { Request, Response } from "express";
import { body } from "express-validator";
import { requireAuth, validateRequest } from "@ally-tickets/common";
import { Ticket } from "../models/tickets";
import { TicketCreatedPublisher } from "../events/publishers/ticket-created-publisher";
import { natsWrapper } from "../nats-wrapper";

const router = express.Router();

router.post(
  "/api/tickets",
  requireAuth,
  [
    body("title").not().isEmpty().withMessage("Title is required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be greater than 0"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { title, price } = req.body;

    const tickets = Ticket.build({
      title,
      price,
      userId: req.currentUser!.id,
    });

    await tickets.save();

    new TicketCreatedPublisher(natsWrapper.client).publish({
      id: tickets.id,
      title: tickets.title,
      price: tickets.price,
      userId: tickets.userId,
      version: tickets.version,
    });

    return res.status(201).send(tickets);
  }
);

export { router as createTicketRouter };
