import { Context } from "../context";

export const generoMutations = {
  criarGenero: (_parent: any, args: { input: any }, context: Context) => {
    return context.services.generoService.create(args.input);
  },
  atualizarGenero: (_parent: any, args: { id: string; input: any }, context: Context) => {
    return context.services.generoService.update(Number(args.id), args.input);
  },
  excluirGenero: (_parent: any, args: { id: string }, context: Context) => {
    return context.services.generoService.remove(Number(args.id));
  },
};