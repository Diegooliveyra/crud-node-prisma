import { UserModel } from '@modules/user/user.model'
import { AuthDTO } from './dto/auth.dtp'
import { getUserByCpfOurEmail } from '@modules/user/user.service'
import { validatePassword } from '@utils/password'
import { NotFoundException } from '@exceptions/not-found-exception'

export const validadeAuth = async (authDTO: AuthDTO): Promise<UserModel> => {
  const user = await getUserByCpfOurEmail(authDTO?.email)

  if (!user) {
    throw new NotFoundException('User')
  }

  const isValidPassword = await validatePassword(authDTO?.password, user.password)

  if (!isValidPassword) {
    throw new NotFoundException('User')
  }
  return user
}
