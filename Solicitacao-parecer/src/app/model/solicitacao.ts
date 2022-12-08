import { Solicitante } from "./solicitante";

export class Solicitacao {
  assunto?: string;
  mensagem?: string;
  justificativa?: string;
  arquivo?: File;
  solicitante?: Solicitante = new Solicitante();
}
