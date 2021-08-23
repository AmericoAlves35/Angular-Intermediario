export interface Filme {
  id?: number;          // o "?" Interrogação  indica que não é opcional
  titulo: string;
  urlFoto?: string;     // o "?" Interrogação  indica que não é opcional
  dtLancamento: Date;
  descricao?: string;   // o "?" Interrogação  indica que não é opcional
  nota: number;
  urlIMDb?: string;     // o "?" Interrogação  indica que não é opcional
  genero: string;
 
}
