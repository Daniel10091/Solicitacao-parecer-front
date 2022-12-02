import { EnderecoSolicitante } from "./enderecoSolicitante";

export interface Solicitante {
    nome: string;
    crm: number;
    uf: string;
    cpf: string;
    email: string;
    endereco: EnderecoSolicitante;
}