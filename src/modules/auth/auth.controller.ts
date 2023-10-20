import { Response, Router } from 'express'
import { TypedRequestBody } from 'src/@types/requestType'
import { AuthDTO } from './dto/auth.dtp'
import { validadeAuth } from './auth.service'
import { ReturnError } from '@exceptions/dto/return-error.dto'

const authRouter = Router()

const router = Router()

authRouter.use('/auth', router)

router.post('/', async (req: TypedRequestBody<AuthDTO>, res: Response): Promise<void> => {
  const user = await validadeAuth(req.body).catch((error) => {
    new ReturnError(res, error)
  })

  res.status(200).send(user)
})

export default authRouter
