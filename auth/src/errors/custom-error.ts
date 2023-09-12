export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super("Error message");
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
