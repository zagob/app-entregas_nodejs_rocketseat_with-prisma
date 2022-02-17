import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateDeliveryman(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Token missing",
    });
  }

  // Bearer 9823123213
  const [, token] = authHeader.split(" "); // [0] - Beaer [1] - token

  try {
    const { sub } = verify(
      token,
      process.env.SECRET_TOKEN_DELIVERYMAN
    ) as IPayload;

    request.id_deliveryman = sub;

    return next();
  } catch (err) {
    return response.status(401).json({
      message: "Invalid token!",
    });
  }
}
