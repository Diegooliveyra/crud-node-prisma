import { Router } from 'express'

const userRouter = Router()

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

export default userRouter
