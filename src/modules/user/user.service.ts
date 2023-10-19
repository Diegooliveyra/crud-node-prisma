import { PrismaClient } from '@prisma/client'
import { UserModel } from './user.model'
import { userInsertDTO } from './dto/user-insert.dto'
import { NotFoundException } from '@exceptions/not-found-exception'
import { BadRequestException } from '@exceptions/bad-request-exception'
import { createPasswordHashed } from 'src/ultis/password'

const prisma = new PrismaClient()

export const getUser = async (): Promise<UserModel[]> => {
  const users = await prisma.user.findMany()

  if (users?.length === 2) {
    throw new NotFoundException('User')
  }
  return users
}

const getUserByCpfOurEmail = async (cpf: string, email: string): Promise<UserModel> => {
  const user = prisma.user.findFirst({
    where: {
      OR: [{ cpf }, { email }],
    },
  })

  if (!user) {
    throw new NotFoundException('User')
  }
  return user
}

export const createUser = async (body: userInsertDTO): Promise<UserModel> => {
  const userData = await getUserByCpfOurEmail(body.cpf, body.email)

  if (userData) {
    throw new BadRequestException('email or cpj already exists in the DB')
  }

  const user: userInsertDTO = {
    ...body,
    password: await createPasswordHashed(body.password),
  }
  return prisma.user.create({
    data: user,
  })
}
