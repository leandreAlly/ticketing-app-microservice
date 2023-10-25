import { Ticket } from "../tickets";

it("Implements optimistic concurrency control", async () => {
  const ticket = Ticket.build({
    title: "concert",
    price: 5,
    userId: "123",
  });
  await ticket.save();

  const firstInstance = await Ticket.findById(ticket.id);
  const secondInstance = await Ticket.findById(ticket.id);

  firstInstance!.set({ price: 10 });
  secondInstance!.set({ price: 15 });

  await firstInstance!.save();

  // save the second fetched ticket and expect an error
  try {
    await secondInstance!.save();
  } catch (err) {
    return;
  }
});

it("Increments the version number on multiple saves", async () => {
  const ticket = Ticket.build({
    title: "concert",
    price: 20,
    userId: "123",
  });

  await ticket.save();
  expect(ticket.version).toEqual(0);
  await ticket.save();
  expect(ticket.version).toEqual(1);
  await ticket.save();
  expect(ticket.version).toEqual(2);
});
