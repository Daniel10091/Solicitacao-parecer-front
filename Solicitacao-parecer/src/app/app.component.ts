import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Solicitacao } from './solicitacao';
import { SolicitacaoService } from './solicitacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {

  selectedState: any = null;

  states: any[] = [
    { name: 'Arizona', code: 'Arizona' },
    { name: 'California', value: 'California' },
    { name: 'Florida', code: 'Florida' },
    { name: 'Ohio', code: 'Ohio' },
    { name: 'Washington', code: 'Washington' }
  ];

  dropdownUf = [
    { name: '--', code: '--' },
    { name: 'AC', code: 'AC' },
    { name: 'AL', code: 'AL' },
    { name: 'AM', code: 'AM' },
    { name: 'AP', code: 'AP' },
    { name: 'BA', code: 'BA' },
    { name: 'CE', code: 'CE' },
    { name: 'DF', code: 'DF' },
    { name: 'ES', code: 'ES' },
    { name: 'GO', code: 'GO' },
    { name: 'MA', code: 'MA' },
    { name: 'MG', code: 'MG' },
    { name: 'MT', code: 'MT' },
    { name: 'MS', code: 'MS' },
    { name: 'PA', code: 'PA' },
    { name: 'PB', code: 'PB' },
    { name: 'PE', code: 'PE' },
    { name: 'PI', code: 'PI' },
    { name: 'PR', code: 'PR' },
    { name: 'RJ', code: 'RJ' },
    { name: 'RN', code: 'RN' },
    { name: 'RS', code: 'RS' },
    { name: 'RO', code: 'RO' },
    { name: 'RR', code: 'RR' },
    { name: 'SC', code: 'SC' },
    { name: 'SP', code: 'SP' },
    { name: 'SE', code: 'SE' },
    { name: 'TO', code: 'TO' }
  ];

  dropdownEstado = [
    { name: '--', code: '--' },
  ];

  dropdownCidade = [
    { name: '--', code: '--' },
  ];

  uploadedFiles: any[] = [];
  fileName: string = "";

  constructor(
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private solicitacaoService: SolicitacaoService
  ) { }

  public onUpload(): void {
    var inputFile = document.createElement("input");

    inputFile.type = "file";
    inputFile.accept = "image/png, image/jpg, .doc, .docx, .pdf, .zip, .rar";
    inputFile.style.display = "none";
    document.body.appendChild(inputFile);
    inputFile.click();

    inputFile.onchange = (e: any) => {
      this.uploadedFiles.push(e.target.files[0]);
      this.fileName = e.target.files[0].name;
    }

    inputFile.remove();
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  invalid = null;

  public enviarSolicitacao(addForm: NgForm): void {
    // if (addForm.valid) {
      // this.solicitacaoService.enviarSolicitacao(addForm.value).subscribe(
    //     (response: Solicitacao) => {
    //       console.log(response);
    //       addForm.reset();
    //     },
    //     (error: HttpErrorResponse) => {
    //       alert(error.message);
    //       addForm.reset();
    //     }
    //   )
    // } else {
    //   alert("Preencha todos os campos!");
    // }
    var solicitacao: Solicitacao;
  }
}
