import { Publisher, Subjects, TicketUpdatedEvent } from "@ally-tickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
