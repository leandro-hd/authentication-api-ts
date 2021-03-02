import jwt from 'jsonwebtoken';
import data from '../config/auth.json';
import { NextFunction, Request, Response } from 'express';

export default function authMiddleware(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({Unauthorized: 'No token provided'})
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return response.status(401).json({Unauthorized: 'Token error'})
  }

  const [ scheme, token ] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return response.status(401).json({Unauthorized: 'Token malformatted'})
  }

  const authConfig = data;

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) {
      return response.status(401).json({Unauthorized: 'Token invalid'})
    }

    const userId = decoded.id;
    return next();
  })
}

export { authMiddleware };