import { ReturnError } from '@exceptions/dto/return-error.dto'
import { UnauthorizedException } from '@exceptions/unauthorized-exception'
import { UserAuth } from '@modules/auth/dto/user-auth.dto'
import { verifyToken } from '@utils/auth'
import { NextFunction, Request, Response } from 'express'
import { TypeUserEnum } from 'src/enums/typeuser.enum'

export const authAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const authorization = req.headers.authorization
    const user: UserAuth = verifyToken(authorization)

    if (user.typeUser !== TypeUserEnum.ADMIN) {
      new ReturnError(res, new UnauthorizedException())
      return
    }

    next()
  } catch (error) {
    new ReturnError(res, error)
  }
}
