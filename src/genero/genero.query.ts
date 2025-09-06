import { Context } from "../context";

export const generoQueries = {
  generos: (_parent: any, _args: any, context: Context) => {
    return context.services.generoService.findAll();
  },
  genero: (_parent: any, args: { id: string }, context: Context) => {
    return context.services.generoService.findOne(Number(args.id));
  },
};