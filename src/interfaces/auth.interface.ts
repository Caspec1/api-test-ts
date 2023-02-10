import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface Auth {
  email: string
  password: string
}

export interface RequestExt extends Request {
  user?: {
    id: string | undefined
    name: string | undefined
    email: string | undefined
  }
}
