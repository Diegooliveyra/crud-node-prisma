import { Router } from 'express'
import { createUser, getUser } from './user.service'

const userRouter = Router()

const router = Router()

userRouter.use('/user', router)

router.get('/', async (req, res) => {
  const users = await getUser()
  res.send(users)
})

router.post('/', async (req, res) => {
  const user = await createUser(req.body)
  res.send(user)
})

export default userRouter
