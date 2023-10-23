import { ReturnError } from '@exceptions/dto/return-error.dto'
import { verifyToken } from '@utils/auth'
import { NextFunction, Request, Response } from 'express'

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const authorization = req.headers.authorization
    verifyToken(authorization)
    next()
  } catch (error) {
    new ReturnError(res, error)
  }
}
