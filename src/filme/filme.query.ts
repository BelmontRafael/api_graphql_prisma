import { Context } from "../context";

export const filmeQueries = {
  filmes: (_parent: any, _args: any, context: Context) => {
    return context.services.filmeService.findAll();
  },
  filme: (_parent: any, args: { id: string }, context: Context) => {
    return context.services.filmeService.findOne(Number(args.id));
  },
};