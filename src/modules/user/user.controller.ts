import { Response, Router } from 'express'
import { createUser, getUser } from './user.service'
import { UserModel } from './user.model'
import { TypedRequestBody } from 'src/@types/requestType'
import { NotFoundException } from '@exceptions/not-found-exception'
import { ReturnError } from '@exceptions/dto/return-error.dto'
import { authMiddleware } from '@middlewares/auth.middleware'

const userRouter = Router()
const router = Router()

userRouter.use('/user', router)

router.use(authMiddleware)

router.get('/', async (req, res: Response): Promise<void> => {
  try {
    const users = await getUser()
    res.send(users)
  } catch (error) {
    if (error instanceof NotFoundException) {
      res.status(204)
    }
    new ReturnError(res, error)
  }
})

router.post('/', async (req: TypedRequestBody<UserModel>, res: Response): Promise<void> => {
  const user = await createUser(req.body).catch((error) => {
    new ReturnError(res, error)
  })
  res.send(user)
})

export default userRouter
