import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getUser = async () => {
  return prisma.user.findMany()
}

export const createUser = async (body) => {
  return prisma.user.create({
    data: body,
  })
}
