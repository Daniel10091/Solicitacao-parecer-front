import { Solicitante } from "./solicitante";

export class Solicitacao {
  assunto?: string;
  mensagem?: string;
  justificativa?: string;
  arquivo?: BinaryType[];
  solicitante?: Solicitante;
}
