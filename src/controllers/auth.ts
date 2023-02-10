import { Request, Response } from "express"
import { loginUser, registerNewUser } from "../services/auth"
import { handleHttp } from "../utils/error.handle"

export const registerController = async ({body}:Request, res: Response) => {
  try {
    const responseUser = await registerNewUser(body)
    res.send(responseUser)
  } catch (error) {
    handleHttp(res, 'ERROR_REGISTER_USER', error)
  }
}

export const loginController = async ({body}:Request, res: Response) => {
  try {
    const { email, password } = body
    const responseUser = await loginUser({ email, password })
    res.send(responseUser)
  } catch (error) {
    handleHttp(res, 'ERROR_LOGIN', error)
  }
}
