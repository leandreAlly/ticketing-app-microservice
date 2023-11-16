import { PaymentCreatedEvent, Publisher, Subjects } from "@ally-tickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
