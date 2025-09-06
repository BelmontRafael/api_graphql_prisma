import { Context } from "../context";

export const atorMutations = {
  criarAtor: (_parent: any, args: { input: any }, context: Context) => {
    return context.services.atorService.create(args.input);
  },
  atualizarAtor: (_parent: any, args: { id: string; input: any }, context: Context) => {
    return context.services.atorService.update(Number(args.id), args.input);
  },
  excluirAtor: (_parent: any, args: { id: string }, context: Context) => {
    return context.services.atorService.remove(Number(args.id));
  },
};