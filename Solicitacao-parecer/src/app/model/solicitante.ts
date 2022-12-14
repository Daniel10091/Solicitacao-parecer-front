import { Endereco } from "./endereco";

export class Solicitante {
  nome: string;
  crm: number;
  uf: string;
  cpf: string;
  email: string;
  endereco: Endereco = new Endereco();
}
