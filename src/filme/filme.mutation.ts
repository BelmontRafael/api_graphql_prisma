import { Context } from "../context";

export const filmeMutations = {
  criarFilme: (_parent: any, args: { input: any }, context: Context) => {
    return context.services.filmeService.create(args.input);
  },
  atualizarFilme: (_parent: any, args: { id: string; input: any }, context: Context) => {
    return context.services.filmeService.update(Number(args.id), args.input);
  },
  excluirFilme: (_parent: any, args: { id: string }, context: Context) => {
    return context.services.filmeService.remove(Number(args.id));
  },
  adicionarAtoresEmFilme: (_parent: any, args: { filmeId: string; atorIds: string[] }, context: Context) => {
    return context.services.filmeService.adicionarAtoresEmFilme(Number(args.filmeId), args.atorIds.map(Number));
  },
  removerAtorDeFilme: (_parent: any, args: { filmeId: string; atorId: string }, context: Context) => {
    return context.services.filmeService.removerAtorDeFilme(Number(args.filmeId), Number(args.atorId));
  },
  adicionarGenerosEmFilme: (_parent: any, args: { filmeId: string; generoIds: string[] }, context: Context) => {
    return context.services.filmeService.adicionarGenerosEmFilme(Number(args.filmeId), args.generoIds.map(Number));
  },
};