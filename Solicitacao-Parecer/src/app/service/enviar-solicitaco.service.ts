import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Solicitacao } from '../model/solicitacao';

@Injectable({
  providedIn: 'root'
})
export class EnviarSolicitacoService {

  private apiServeUri = environment.appBaseUrl;

  constructor(private httpClient: HttpClient) { }

  public enviarSolicitacao(solicitacao: Solicitacao): Observable<Solicitacao> {
    return this.httpClient.post<Solicitacao>(`${this.apiServeUri}/solicitacao`, solicitacao);
  }
  
  public save(formData: FormData): Observable<any> {
    return this.httpClient.post(this.apiServeUri + '/solicitacao', formData);
  }
  
}
