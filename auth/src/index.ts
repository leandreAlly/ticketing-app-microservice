import express from "express";
import "express-async-errors";
import { currentUserRouter } from "./routes/current-user";
import { siginupRouter } from "./routes/signup";
import { signoutRouter } from "./routes/signout";
import { signinRouter } from "./routes/signin";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

const app = express();

app.use(express.json());

app.use(currentUserRouter);
app.use(siginupRouter);
app.use(signoutRouter);
app.use(signinRouter);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Listening on port 3000...!!!!");
});
