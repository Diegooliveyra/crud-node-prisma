import { Response, Router } from 'express'
import { createUser, getUser } from './user.service'
import { UserModel } from './user.model'
import { TypedRequestBody } from 'src/@types/requestType'

const userRouter = Router()

const router = Router()

userRouter.use('/user', router)

router.get('/', async (_, res: Response): Promise<void> => {
  const users = await getUser()
  res.send(users)
})

router.post('/', async (req: TypedRequestBody<UserModel>, res: Response): Promise<void> => {
  const user = await createUser(req.body)
  res.send(user)
})

export default userRouter
