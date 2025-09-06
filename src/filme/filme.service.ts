import { ApolloError } from 'apollo-server';
import { FilmeRepository } from './filme.repository';
import { AtorRepository } from '../ator/ator.repository';
import { GeneroRepository } from '../genero/genero.repository';
import { FilmeInput, UpdateFilmeInput } from '../schema/types/input';


export class FilmeService {
  constructor(
    private repository: FilmeRepository,
    private atorRepository: AtorRepository,
    private generoRepository: GeneroRepository,
  ) {}

  async create(input: FilmeInput) {

    const atoresIdsNumeros = input.atoresIds?.map(Number);
    const generosIdsNumeros = input.generosIds?.map(Number)

    const data = {
      nome: input.nome,
      ano_lancamento: input.ano_lancamento,
      sinopse: input.sinopse,
    };
    return this.repository.create(data, atoresIdsNumeros, generosIdsNumeros);
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    const filme = await this.repository.findById(id);
    if (!filme) {
      throw new ApolloError('Filme não encontrado.', 'NOT_FOUND');
    }
    return filme;
  }

  async update(id: number, input: UpdateFilmeInput) {

    const atoresIdsNumeros = input.atoresIds?.map(Number);
    const generosIdsNumeros = input.generosIds?.map(Number)

    const data = {
      nome: input.nome,
      ano_lancamento: input.ano_lancamento,
      sinopse: input.sinopse,
    };
    return this.repository.update(id, data, atoresIdsNumeros, generosIdsNumeros);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.repository.remove(id);
    return true;
  }
  
  async adicionarAtoresEmFilme(filmeId: number, atorIds: number[]) {
    return this.repository.addAtores(filmeId, atorIds);
  }
  
  async removerAtorDeFilme(filmeId: number, atorId: number) {
    return this.repository.removeAtor(filmeId, atorId);
  }

  async adicionarGenerosEmFilme(filmeId: number, generoIds: number[]) {
    return this.repository.addGeneros(filmeId, generoIds);
  }

}