import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadArquivoService {

  constructor(private httpClient: HttpClient) { }

  public uploadArquivo(arquivo: File) {
    // this.httpClient.get('/uploadArquivo').forEachChild(function (response) { response.status = 200; });
    // this.httpClient.post('/uploadArquivo
  }

}
