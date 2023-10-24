import { Response, Router } from 'express'
import { createUser, deleteUser, getUser, updateUser } from './user.service'
import { UserModel } from './user.model'
import { TypedRequestBody } from 'src/@types/requestType'
import { NotFoundException } from '@exceptions/not-found-exception'
import { ReturnError } from '@exceptions/dto/return-error.dto'
import { authMiddleware } from '@middlewares/auth.middleware'

const userRouter = Router()
const router = Router()

const getUserController = async (req, res: Response): Promise<void> => {
  try {
    const users = await getUser()
    res.send(users)
  } catch (error) {
    if (error instanceof NotFoundException) {
      res.status(204)
    }
    new ReturnError(res, error)
  }
}

const createUserController = async (
  req: TypedRequestBody<UserModel>,
  res: Response,
): Promise<void> => {
  const user = await createUser(req.body).catch((error) => {
    new ReturnError(res, error)
  })
  res.send(user)
}

const updateUserController = async (
  req: TypedRequestBody<UserModel>,
  res: Response,
): Promise<void> => {
  const user = await updateUser(req.params.id, req.body).catch((error) => {
    new ReturnError(res, error)
  })
  res.send(user)
}

const deleteUserController = async (
  req: TypedRequestBody<UserModel>,
  res: Response,
): Promise<void> => {
  const user = await deleteUser(req.params.id).catch((error) => {
    new ReturnError(res, error)
  })
  res.send(user)
}

userRouter.use('/user', router)

router.post('/', createUserController)

router.use(authMiddleware)
router.get('/', getUserController)
router.put('/:id', updateUserController)
router.delete('/:id', deleteUserController)

export default userRouter
