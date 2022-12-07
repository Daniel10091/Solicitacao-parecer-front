import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Endereco } from '../model/endereco';
import { Solicitacao } from '../model/solicitacao';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private appBaseUrl = environment.appBaseUrl;

  public endereco: Endereco;

  constructor(private httpClient: HttpClient) { }

  buscaEnderecoCEP(cep: string) {
    const options = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'content-type': 'application/json;charset=utf-8',
      }
    }
    return this.httpClient.get<any>(`${this.appBaseUrl}/busca-endereco/${cep}`, options);
  }

  public enviarSolicitacao(solicitacao: Solicitacao): Observable<Solicitacao> {
    return this.httpClient.post<Solicitacao>(`${this.appBaseUrl}/imprimir`, solicitacao);
  }
  
}
