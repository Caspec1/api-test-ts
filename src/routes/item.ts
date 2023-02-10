import { Router } from 'express'
import { createItem, deleteItem, getItem, getItems, updateItem } from '../controllers/item'
import { logMiddleware } from '../middleware/log'
const router = Router()

router.route('/').get(logMiddleware, getItems).post(createItem)
router.route('/:id').get(getItem).put(updateItem).delete(deleteItem)

export { router }
