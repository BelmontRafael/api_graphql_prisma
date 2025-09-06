
export interface GeneroInput { nome: string; }
export interface UpdateGeneroInput { nome?: string; }

export interface AtorInput {
  nome: string;
  data_nascimento?: string;
  filmesIds?: number[];
}

export interface UpdateAtorInput {
  nome?: string;
  data_nascimento?: string;
  filmesIds?: number[];
}

export interface FilmeInput {
  nome: string;
  ano_lancamento: number;
  sinopse?: string;
  atoresIds?: number[];
  generosIds?: number[];
}

export interface UpdateFilmeInput {
  nome?: string;
  ano_lancamento?: number;
  sinopse?: string;
  atoresIds?: number[];
  generosIds?: number[];
}