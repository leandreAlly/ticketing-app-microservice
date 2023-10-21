import { Publisher, Subjects, OrderCreatedEvent } from "@ally-tickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
