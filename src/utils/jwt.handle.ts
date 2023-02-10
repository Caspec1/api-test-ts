import { JwtPayload, sign, verify } from 'jsonwebtoken'
import { Types } from 'mongoose'
const JWT_SECRET = process.env.JWT_SECRET || 'jd912n1f12d'

export const generateToken = (id: Types.ObjectId) => {
  const jwt = sign({id}, JWT_SECRET, {
    expiresIn: '2d'
  })
  return jwt
}

export const verifyToken = (token: string) => {
  return verify(token, JWT_SECRET) as JwtPayload
}
