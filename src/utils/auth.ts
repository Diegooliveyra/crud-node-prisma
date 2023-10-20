import { UnauthorizedException } from '@exceptions/unauthorized-exception'
import { UserAuth } from '@modules/auth/dto/user-auth.dto'
import { UserModel } from '@modules/user/user.model'
import { sign, verify } from 'jsonwebtoken'

export const PASSWORD_JWT = 'palavrachave'

export const generateToken = (user: UserModel): string => {
  return sign(
    {
      userId: user.id,
      email: user.email,
      typeUser: user.typeUser,
    } as UserAuth,
    PASSWORD_JWT,
    {
      subject: String(user?.id),
      expiresIn: '604800000',
    },
  )
}

export const verifyToken = (autorization: string): UserAuth => {
  if (!autorization) {
    throw new UnauthorizedException()
  }

  const [, token] = autorization.split(' ')

  try {
    const decodedToken = <UserAuth>verify(token, PASSWORD_JWT)
    return decodedToken
  } catch (error) {
    throw new UnauthorizedException()
  }
}
