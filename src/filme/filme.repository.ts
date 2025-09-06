import { PrismaClient } from "../generated/prisma";

export class FilmeRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: { nome: string; ano_lancamento: number; sinopse?: string }, atoresIds?: number[], generosIds?: number[]) {
    return this.prisma.filme.create({
      data: {
        ...data,
        atores: atoresIds?.length ? { connect: atoresIds.map(id => ({ id })) } : undefined,
        generos: generosIds?.length ? { connect: generosIds.map(id => ({ id })) } : undefined,
      },
      include: { atores: true, generos: true },
    });
  }

  async findAll() {
    return this.prisma.filme.findMany({
      include: { atores: true, generos: true },
      orderBy: { nome: 'asc' },
    });
  }

  async findById(id: number) {
    return this.prisma.filme.findUnique({
      where: { id },
      include: { atores: true, generos: true },
    });
  }

  async update(id: number, data: { nome?: string; ano_lancamento?: number; sinopse?: string }, atoresIds?: number[], generosIds?: number[]) {
    return this.prisma.filme.update({
      where: { id },
      data: {
        ...data,
        atores: atoresIds ? { set: atoresIds.map(id => ({ id })) } : undefined,
        generos: generosIds ? { set: generosIds.map(id => ({ id })) } : undefined,
      },
      include: { atores: true, generos: true },
    });
  }

  async remove(id: number) {
    return this.prisma.filme.delete({ where: { id } });
  }

  async addAtores(filmeId: number, atorIds: number[]) {
    return this.prisma.filme.update({
      where: { id: filmeId },
      data: {
        atores: { connect: atorIds.map(id => ({ id })) },
      },
      include: { atores: true, generos: true },
    });
  }

  async removeAtor(filmeId: number, atorId: number) {
    return this.prisma.filme.update({
      where: { id: filmeId },
      data: {
        atores: { disconnect: { id: atorId } },
      },
      include: { atores: true, generos: true },
    });
  }

  async addGeneros(filmeId: number, generoIds: number[]) {
    return this.prisma.filme.update({
      where: { id: filmeId },
      data: {
        generos: { connect: generoIds.map(id => ({ id })) },
      },
      include: { atores: true, generos: true },
    });
  }
}