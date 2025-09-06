import { Ator, PrismaClient } from "../generated/prisma";


export class AtorRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: { nome: string; data_nascimento?: Date }, filmesIds?: number[]) {
    return this.prisma.ator.create({
      data: {
        ...data,
        filmes: filmesIds && filmesIds.length > 0
          ? { connect: filmesIds.map(id => ({ id })) }
          : undefined,
      },
      include: { filmes: true },
    });
  }

  async findAll() {
    return this.prisma.ator.findMany({
      include: { filmes: true },
      orderBy: { nome: 'asc' },
    });
  }

  async findById(id: number): Promise<Ator | null> {
    return this.prisma.ator.findUnique({
      where: { id },
      include: { filmes: true },
    });
  }

  async update(id: number, data: { nome?: string; data_nascimento?: Date }, filmesIds?: number[]) {
    return this.prisma.ator.update({
      where: { id },
      data: {
        ...data,
        filmes: filmesIds
          ? { set: filmesIds.map(id => ({ id })) }
          : undefined,
      },
      include: { filmes: true },
    });
  }

  async remove(id: number) {
    return this.prisma.ator.delete({
      where: { id },
    });
  }
}