import { Request, Response } from "express"
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item"
import { handleHttp } from "../utils/error.handle"

export const createItem = async ({body}: Request, res: Response) => {
  try {
    const resItem = await insertCar(body)
    res.send(resItem)
  } catch (error) {
    handleHttp(res, 'ERROR_CREATE_ITEM', error)
  }
}

export const getItems = async (req: Request, res: Response) => {
  try {
    const resItems = await getCars()
    res.send(resItems)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEMS')
  }
}

export const getItem = async ({params}: Request, res: Response) => {
  try {
    const { id } = params
    const resItem = await getCar(id)
    res.send(resItem)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEM')
  }
}

export const updateItem = async ({params, body}: Request, res: Response) => {
  try {
    const { id } = params
    const resItem = await updateCar(id, body)
    res.send(resItem)
  } catch (error) {
    handleHttp(res, 'ERROR_UPLOAD_ITEM')
  }
}

export const deleteItem = async ({params}: Request, res: Response) => {
  try {
    const { id } = params
    const resItem = await deleteCar(id)
    res.send(resItem)
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_ITEM', error)
  }
}
