
import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';

export async function startApolloServer() {

  const resolvers = {};

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await server.listen();
  console.log(`Servidor rodando em ${url}`);
}