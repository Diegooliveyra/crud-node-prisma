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
    return new ReturnError(res, error)
  })
  console.log(user)
  res.send(user)
})

export default authRouter
