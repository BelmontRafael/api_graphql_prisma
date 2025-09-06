import { AtorService } from "./ator/ator.service";
import { FilmeService } from "./filme/filme.service";
import { GeneroService } from "./genero/genero.service";


export interface Context {
  services: {
    generoService: GeneroService;
    atorService: AtorService;
    filmeService: FilmeService;
  };
}