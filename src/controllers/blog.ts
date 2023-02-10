import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

export const createItem = ({body}: Request, res: Response) => {
  try {
    res.send(body)
  } catch (error) {
    handleHttp(res, 'ERROR_CREATE_BLOG')
  }
}

export const getBlogs = (req: Request, res: Response) => {
  try {

  } catch (error) {
    handleHttp(res, 'ERROR_GET_BLOGS')
  }
}

export const getBlog = (req: Request, res: Response) => {
  try {

  } catch (error) {
    handleHttp(res, 'ERROR_GET_BLOG')
  }
}

export const updateBlog = (req: Request, res: Response) => {
  try {

  } catch (error) {
    handleHttp(res, 'ERROR_UPLOAD_BLOG')
  }
}

export const deleteBlog = (req: Request, res: Response) => {
  try {

  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_BLOG')
  }
}
