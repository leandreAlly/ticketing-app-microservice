import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface TicketsAttrs {
  title: string;
  price: number;
  userId: string;
}

interface TicketsDoc extends mongoose.Document {
  title: string;
  price: number;
  userId: string;
  version: number;
  orderId?: string;
}

interface TicketsModel extends mongoose.Model<TicketsDoc> {
  build(attrs: TicketsAttrs): TicketsDoc;
}

const ticketsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    orderId: {
      type: String,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);
ticketsSchema.set("versionKey", "version");
ticketsSchema.plugin(updateIfCurrentPlugin);

ticketsSchema.statics.build = (attrs: TicketsAttrs) => {
  return new Ticket(attrs);
};

const Ticket = mongoose.model<TicketsDoc, TicketsModel>(
  "Ticket",
  ticketsSchema
);

export { Ticket };
