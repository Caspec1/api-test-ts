import { JwtPayload } from 'jsonwebtoken';
export interface Storage {
  fileName: string;
  path: string;
  idUser: string | object | JwtPayload;
}
