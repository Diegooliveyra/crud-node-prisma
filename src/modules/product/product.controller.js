import { Router } from 'express'

const productRouter = Router()

const router = Router()

productRouter.use('/product', router)

router.get('/', (req, res) => {
  res.send('product get')
})
export default productRouter
