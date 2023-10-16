import { Publisher, Subjects, TicketCreatedEvent } from "@ally-tickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
