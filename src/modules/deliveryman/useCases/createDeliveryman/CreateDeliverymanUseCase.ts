import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateDeliveryman {
  username: string;
  password: string;
}

export class CreateDeliverymanUseCase {
  async execute({ password, username }: ICreateDeliveryman) {
    // Validar se o usuário existe
    const DeliverymanExists = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    if (DeliverymanExists) {
      throw new Error("Client already exists");
    }

    // Criptografar a senha
    const hashPassword = await hash(password, 10);

    // Salvar o deliveryman
    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return deliveryman;
  }
}
