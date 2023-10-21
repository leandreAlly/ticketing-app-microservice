import { Publisher, Subjects, OrderCancelledEvent } from "@ally-tickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
