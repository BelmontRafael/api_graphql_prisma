import { GeneroService } from "./genero/genero.service";


export interface Context {
  services: {
    generoService: GeneroService;
    atorService: AtorService;  
  };
}