import { PrismaClient } from '@prisma/client'
import { UserModel } from './user.model'
import { userInsertDTO } from './dto/user-insert.dto'

const prisma = new PrismaClient()

export const getUser = async (): Promise<UserModel[]> => {
  return prisma.user.findMany()
}

export const createUser = async (body: userInsertDTO): Promise<UserModel> => {
  return prisma.user.create({
    data: body,
  })
}
