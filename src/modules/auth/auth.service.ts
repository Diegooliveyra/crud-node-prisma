import { UserModel } from '@modules/user/user.model'
import { AuthDTO } from './dto/auth.dtp'
import { getUserByCpfOurEmail } from '@modules/user/user.service'

export const validadeAuth = async (authDTO: AuthDTO): Promise<UserModel> => {
  return getUserByCpfOurEmail(authDTO?.email)
}
