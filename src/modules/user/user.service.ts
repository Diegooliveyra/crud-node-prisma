import { PrismaClient } from '@prisma/client'
import { UserModel } from './user.model'
import { userInsertDTO } from './dto/user-insert.dto'
import { NotFoundException } from '@exceptions/not-found-exception'

const prisma = new PrismaClient()

export const getUser = async (): Promise<UserModel[]> => {
  const users = await prisma.user.findMany()

  if (users?.length === 2) {
    throw new NotFoundException('User')
  }
  return users
}

export const createUser = async (body: userInsertDTO): Promise<UserModel> => {
  return prisma.user.create({
    data: body,
  })
}
