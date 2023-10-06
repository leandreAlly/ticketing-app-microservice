import mongoose from "mongoose";

interface TicketsAttrs {
  title: string;
  price: number;
  userId: string;
}

interface TicketsDoc extends mongoose.Document {
  title: string;
  price: number;
  userId: string;
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
ticketsSchema.statics.build = (attrs: TicketsAttrs) => {
  return new Ticket(attrs);
};

const Ticket = mongoose.model<TicketsDoc, TicketsModel>(
  "Ticket",
  ticketsSchema
);

export { Ticket };
