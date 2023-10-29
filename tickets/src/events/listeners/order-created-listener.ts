import { Listener, OrderCreatedEvent, Subjects } from "@ally-tickets/common";
import { queueGroupName } from "./queue-group-name";
import { Message } from "node-nats-streaming";
import { Ticket } from "../../models/tickets";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent["data"], msg: Message) {
    const ticket = await Ticket.findById(data.id);

    if (!ticket) throw new Error("Ticket not found");

    ticket.set({ orderId: data.id });

    await ticket.save();

    msg.ack();
  }
}
