import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { prisma } from './lib/prisma';
import merge from 'lodash.merge';

import { GeneroRepository } from './genero/genero.repository';
import { GeneroService } from './genero/genero.service';
import { Context } from './context';
import { generoQueries } from './genero/genero.query';
import { generoMutations } from './genero/genero.mutation';

export async function startApolloServer() {

  const generoRepository = new GeneroRepository(prisma);
  const generoService = new GeneroService(generoRepository);


  const resolvers = merge(
    { Query: generoQueries, Mutation: generoMutations },
  );

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: (): Context => ({
      services: {
        generoService,
      },
    }),
  });

  const { url } = await server.listen();
  console.log(`Servidor rodando em ${url}`);
}