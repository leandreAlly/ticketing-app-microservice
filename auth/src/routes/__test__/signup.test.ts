import request from "supertest";
import { app } from "../../app";

it("returns a 201 on successful signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "myemail@mail.com",
      password: "password",
    })
    .expect(201);
});

it("returns a 400 with an invalid email", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "myemail",
      password: "password",
    })
    .expect(400);
});

it("returns a 400 with an invalid password", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "myemail@mail.com",
      password: "pa",
    })
    .expect(400);
});
it("returns a 400 with an missing email and password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "myemail@mail.com",
    })
    .expect(400);

  await request(app)
    .post("/api/users/signup")
    .send({
      password: "password",
    })
    .expect(400);
});

it("disallows duplicate emails", async () => {
  // Create a user
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "hellomail@mail.com",
      password: "password",
    })
    .expect(201);

  // Try to create a user with the same email
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "hellomail@mail.com",
      password: "password",
    })
    .expect(409);
});

it("sets a cookie after successful signup", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email: "myemail@mail.com",
      password: "password",
    })
    .expect(201);

  expect(response.get("Set-Cookie")).toBeDefined();
});
