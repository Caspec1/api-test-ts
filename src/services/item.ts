import { Car } from "../interfaces/car.interfaces"
import ItemModel from "../models/Item"

export const insertCar = async (item: Car)=> {
  const responseInsert = await ItemModel.create(item)
  return responseInsert
}

export const getCars = async () => {
  const responseItem = await ItemModel.find()
  return responseItem
}

export const getCar = async (id: string) => {
  const responseItem = await ItemModel.findById(id)
  return responseItem
}

export const updateCar = async (id: string, data: Car) => {
  const responseItem = await ItemModel.findByIdAndUpdate(id, data, {new: true})
  return responseItem
}

export const deleteCar = async (id: string) => {
  const responseItem = await ItemModel.deleteOne({_id: id})
  return responseItem
}
