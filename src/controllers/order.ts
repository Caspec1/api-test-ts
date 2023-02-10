import { Request, Response } from "express"
import { RequestExt } from "../interfaces/auth.interface"
import { handleHttp } from "../utils/error.handle"

export const getOrders = async (req: RequestExt, res: Response) => {
  try {
    res.send(req.user)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEMS')
  }
}
