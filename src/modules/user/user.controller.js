import { PrismaClient } from '@prisma/client'
import { Router } from 'express'

const userRouter = Router()

const router = Router()

userRouter.use('/user', router)

// Get
router.get('/', async (req, res) => {
  const prisma = new PrismaClient()
  const users = await prisma.user.findMany()
  res.send(users)
})

// Get By ID
router.get('/:id', (req, res) => {
  res.send('by id')
})

export default userRouter
