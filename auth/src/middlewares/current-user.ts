import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface UserPayload {
  id: string;
  email: string;
}

// Augment the Request interface
// add a new property to the Request interface
// https://www.typescriptlang.org/docs/handbook/declaration-merging.html
// https://stackoverflow.com/questions/37377731/extend-express-request-object-using-typescript
declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as UserPayload;
    req.currentUser = payload;

    res.send({ currentUser: payload });
  } catch (err) {
    res.send({ currentUser: null });
  }

  next();
};
