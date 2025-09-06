import { Context } from "../context";

export const atorQueries = {
  atores: (_parent: any, _args: any, context: Context) => {
    return context.services.atorService.findAll();
  },
  ator: (_parent: any, args: { id: string }, context: Context) => {
    return context.services.atorService.findOne(Number(args.id));
  },
};