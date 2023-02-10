import { Request, Response, NextFunction } from 'express';
import { verifyToken } from "../utils/jwt.handle";
import UserModel from '../models/user';
import { RequestExt } from '../interfaces/auth.interface';

export const checkJWT = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || null
    const token = jwtByUser?.split(' ')[1]
    const isOk = verifyToken(`${token}`)
    if(!isOk) {
      res.status(401).send('No hay un token')
    } else {
      const user = await UserModel.findById(isOk.id)
      req.user = { name: user?.name, email: user?.email, id: user?._id.toString() }
      next()
    }
  } catch (error) {
    console.log(error)
    res.status(400).send('Sesión no válida')
  }
}
