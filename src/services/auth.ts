import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface"
import UserModel from "../models/user"
import { encrypt, verified } from "../utils/bcrypt.handle"
import { generateToken } from "../utils/jwt.handle"

export const registerNewUser = async ({email, password, name, description}: User) => {
  const checkIs = await UserModel.findOne({email})
  if(checkIs) return "ALREADY_USER"
  const user = new UserModel({email, password, name, description})
  user.password = await encrypt(password)
  const registerNewUser = await UserModel.create(user)
  return registerNewUser
}

export const loginUser = async ({email, password}: Auth) => {
  const user = await UserModel.findOne({email})
  if(!user) return "NOT_FOUND_USER"
  const passwordHash = user.password
  const isCorrect = await verified(password, passwordHash)
  if(!isCorrect) return "NOT_CORRECT"
  const token = generateToken(user._id)
  return {email, token, name: user.name}
}
