import { authMiddleware } from '@middlewares/auth.middleware'
import { Response, Router } from 'express'

const productRouter = Router()
const router = Router()

const getProductsController = async (_, res: Response): Promise<void> => {
  res.send('product get')
}

productRouter.use('/product', router)
router.use(authMiddleware)
router.get('/', getProductsController)

export default productRouter
