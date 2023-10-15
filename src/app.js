import express from 'express'
import { routerLoader } from './routerLoader.js'

const app = express()

routerLoader(app)

const port = 8080

app.listen(port, () => {
  console.log(`Listenig on port ${port}!`)
})
