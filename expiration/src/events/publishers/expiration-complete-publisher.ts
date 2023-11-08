import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@ally-tickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
