import { AuthDTO } from './dto/auth.dtp'
import { getUserByCpfOurEmail } from '@modules/user/user.service'
import { validatePassword } from '@utils/password'
import { NotFoundException } from '@exceptions/not-found-exception'
import { AuthModel } from './auth.model'
import { generateToken } from '@utils/auth'

export const validadeAuth = async (authDTO: AuthDTO): Promise<AuthModel> => {
  const user = await getUserByCpfOurEmail(authDTO?.email)

  if (!user) {
    throw new NotFoundException('User')
  }

  const isValidPassword = await validatePassword(authDTO?.password, user.password)
  if (!isValidPassword) {
    throw new NotFoundException('User')
  }

  return new AuthModel(generateToken(user), user)
}
