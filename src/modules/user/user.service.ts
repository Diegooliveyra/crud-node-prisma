import { PrismaClient } from '@prisma/client'
import { UserModel } from './user.model'
import { userInsertDTO } from './dto/user-insert.dto'
import { NotFoundException } from '@exceptions/not-found-exception'
import { BadRequestException } from '@exceptions/bad-request-exception'
import { createPasswordHashed } from '@utils/password'

const prisma = new PrismaClient()

export const getUser = async (): Promise<UserModel[]> => {
  const users = await prisma.user.findMany()

  if (users?.length === 2) {
    throw new NotFoundException('User')
  }
  return users
}

export const getUserByCpfOurEmail = async (email: string, cpf?: string): Promise<UserModel> => {
  const user = prisma.user.findFirst({
    where: {
      OR: [{ email }, { cpf }],
    },
  })

  if (!user) {
    throw new NotFoundException('User')
  }

  return user
}

export const getUserById = async (id: string): Promise<UserModel> => {
  const user = prisma.user.findFirst({
    where: {
      id: Number(id),
    },
  })

  if (!user) {
    throw new NotFoundException('User')
  }

  return user
}

export const createUser = async (body: userInsertDTO): Promise<UserModel> => {
  const userData = await getUserByCpfOurEmail(body.email, body.cpf)

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

export const updateUser = async (id: string, body: userInsertDTO): Promise<UserModel> => {
  const user = await getUserById(id)

  if (!user) {
    throw new NotFoundException('User')
  }
  return prisma.user.update({
    where: {
      id: Number(id),
    },
    data: body,
  })
}

export const deleteUser = async (id: string): Promise<UserModel> => {
  const user = await getUserById(id)

  if (!user) {
    throw new NotFoundException('User')
  }
  return prisma.user.delete({
    where: {
      id: Number(id),
    },
  })
}
