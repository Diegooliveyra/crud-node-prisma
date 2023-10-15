import express from 'express'
import { userRouter } from './modules/user/user.controller.js'
import { productRouter } from './modules/product/product.controller.js'

const app = express()

app.use(userRouter, productRouter)

const port = 8080

app.listen(port, () => {
  console.log(`Listenig on port ${port}!`)
})
