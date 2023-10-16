import express from 'express'
import { routerLoader } from './routerLoader.js'

const app = express()

app.use(express.json())

routerLoader(app)

const port = 8080

app.listen(port, () => {
  console.log(`Listenig on port ${port}!`)
})
