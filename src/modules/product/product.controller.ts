import { Response, Router } from 'express'

const productRouter = Router()

const router = Router()

productRouter.use('/product', router)

router.get('/', async (_, res: Response): Promise<void> => {
  res.send('product get')
})

export default productRouter
