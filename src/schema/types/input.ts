
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