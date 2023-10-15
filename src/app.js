import express from 'express'

const app = express()

app.get('/user', (req, res) => {
  res.send({ nome: 'Diego Oliveira' })
})

const port = 8080

app.listen(port, () => {
  console.log(`Listenig on port ${port}!`)
})
