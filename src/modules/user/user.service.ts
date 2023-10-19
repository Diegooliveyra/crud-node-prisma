import { PrismaClient } from '@prisma/client'
import { UserModel } from './user.model'
import { userInsertDTO } from './dto/user-insert.dto'
import { NotFoundException } from '@exceptions/not-found-exception'
import { BadRequestException } from '@exceptions/bad-request-exception'

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
  const user = await getUserByCpfOurEmail(body.cpf, body.email)
  if (user) {
    throw new BadRequestException('email or cpj already exists in the DB')
  }
  return prisma.user.create({
    data: body,
  })
}
