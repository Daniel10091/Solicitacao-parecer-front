import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitacao } from './solicitacao';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {
  private apiServerUrl = 'http://localhost:8080/solicitacoes-parecer';

  constructor(private http: HttpClient) { }

  public enviarSolicitacao(solicitacao: Solicitacao): Observable<Solicitacao> {
    return this.http.post<Solicitacao>(`${this.apiServerUrl}/imprimir`, solicitacao);
  }
    
}
