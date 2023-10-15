import { Router } from 'express'

export const userRouter = Router()

const router = Router()

userRouter.use('/user', router)

// Get
router.get('/', (req, res) => {
  res.send('Diego Oliveira')
})

// Get By ID
router.get('/:id', (req, res) => {
  res.send('by id')
})
