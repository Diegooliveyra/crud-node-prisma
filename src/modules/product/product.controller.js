import { Router } from 'express'

export const productRouter = Router()

const router = Router()

productRouter.use('/product', router)

router.get('/', (req, res) => {
  res.send('product get')
})
