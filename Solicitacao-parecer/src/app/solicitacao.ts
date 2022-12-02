import { Solicitante } from "./solicitante";

export interface Solicitacao {
    assunto: string;
    mensagem: string;
    justificativa: string;
    arquivo: string;
    soliticante: Solicitante;
}
