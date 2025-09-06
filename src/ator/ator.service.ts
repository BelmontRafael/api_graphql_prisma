
import { ApolloError } from 'apollo-server';
import { AtorRepository } from './ator.repository';
import { AtorInput, UpdateAtorInput } from '../schema/types/input';


export class AtorService {
  constructor(private repository: AtorRepository) {}

  async create(input: AtorInput) {
    const data = {
      nome: input.nome,
      data_nascimento: input.data_nascimento ? new Date(input.data_nascimento) : undefined
    };

    return this.repository.create(data, input.filmesIds);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    const ator = await this.repository.findById(id);
    if (!ator) {
      throw new ApolloError('Ator não encontrado.', 'NOT_FOUND');
    }
    return ator;
  }

  async update(id: number, input: UpdateAtorInput) {
    await this.findOne(id);

    const data = {
      nome: input.nome,
      data_nascimento: input.data_nascimento ? new Date(input.data_nascimento) : undefined,
    };

    return this.repository.update(id, data, input.filmesIds);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.repository.remove(id);
    return true;
  }
}