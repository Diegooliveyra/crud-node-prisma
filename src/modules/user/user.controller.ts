import { Response, Router } from 'express'
import { createUser, getUser } from './user.service'
import { UserModel } from './user.model'
import { TypedRequestBody } from 'src/@types/requestType'
import { NotFoundException } from '@exceptions/not-found-exception'
import { ReturnError } from '@exceptions/dto/return-error.dto'

const userRouter = Router()

const router = Router()

userRouter.use('/user', router)

router.get('/', async (_, res: Response): Promise<void> => {
  const users = await getUser().catch((error) => {
    if (error instanceof NotFoundException) {
      res.status(204)
      return
    }
    new ReturnError(res, error)
  })
  res.send(users)
})

router.post('/', async (req: TypedRequestBody<UserModel>, res: Response): Promise<void> => {
  const user = await createUser(req.body).catch((error) => {
    new ReturnError(res, error)
  })
  res.send(user)
})

export default userRouter
