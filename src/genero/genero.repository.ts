import { PrismaClient } from "../generated/prisma";

export class GeneroRepository {
  // O construtor recebe a instância do Prisma Client
  constructor(private prisma: PrismaClient) {}

  async create(data: { nome: string }) {
    return this.prisma.genero.create({ data });
  }

  async findAll() {
    return this.prisma.genero.findMany({
      include: { filmes: true },
      orderBy: { nome: 'asc' },
    });
  }

  async findById(id: number) {
    return this.prisma.genero.findUnique({
      where: { id },
      include: { filmes: true },
    });
  }

  async update(id: number, data: { nome?: string }) {
    return this.prisma.genero.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.genero.delete({
      where: { id },
    });
  }
}