import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { prisma } from './lib/prisma';
import merge from 'lodash.merge';

import { GeneroRepository } from './genero/genero.repository';
import { GeneroService } from './genero/genero.service';
import { Context } from './context';
import { generoQueries } from './genero/genero.query';
import { generoMutations } from './genero/genero.mutation';
import { AtorService } from './ator/ator.service';
import { AtorRepository } from './ator/ator.repository';
import { atorQueries } from './ator/ator.query';
import { atorMutations } from './ator/ator.mutation';
import { Ator } from './generated/prisma';

export async function startApolloServer() {

  const generoService = new GeneroService(new GeneroRepository(prisma));
  const atorService = new AtorService(new AtorRepository(prisma));


  const resolvers = merge(
    { Query: generoQueries, Mutation: generoMutations },
    { Query: atorQueries, Mutation: atorMutations },
    {
        Ator: {
            data_nascimento: (ator: Ator) => {
                if (!ator.data_nascimento) return null;
                return ator.data_nascimento.toISOString().split('T')[0];
            },
        },
    }
  );

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: (): Context => ({
      services: {
        generoService,
        atorService,
      },
    }),
  });

  const { url } = await server.listen();
  console.log(`Servidor rodando em ${url}`);
}