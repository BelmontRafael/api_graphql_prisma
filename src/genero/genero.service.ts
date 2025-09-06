// src/genero/genero.service.ts

import { ApolloError } from 'apollo-server';
import { GeneroRepository } from './genero.repository';
import { GeneroInput, UpdateGeneroInput } from './input';


export class GeneroService {
  constructor(private repository: GeneroRepository) {}

  async create(input: GeneroInput) {
    return this.repository.create(input);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    const genero = await this.repository.findById(id);
    if (!genero) {
      throw new ApolloError('Gênero não encontrado.', 'NOT_FOUND');
    }
    return genero;
  }

  async update(id: number, input: UpdateGeneroInput) {
    await this.findOne(id);
    return this.repository.update(id, input);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.repository.remove(id);
    return true;
  }
}