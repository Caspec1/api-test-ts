import { Request } from "express";
import { Auth } from "./auth.interface";

export interface User extends Auth {
  name: string
  description: string
}

export interface SaveReqUser extends Request {
  user: object
}
