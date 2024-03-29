import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { selectModel } from 'src/app/model/dropdown';
import { Solicitacao } from 'src/app/model/solicitacao';
import { EnderecoService } from 'src/app/service/endereco.service';
import { EnviarSolicitacoService } from 'src/app/service/enviar-solicitaco.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  @Input()
  solicitacao: Solicitacao = new Solicitacao();

  dropdownUf: selectModel[];
  dropdownEstado: selectModel[];
  dropdownCidade: selectModel[];

  selectedUf: selectModel;
  selectedEstado: selectModel;
  selectedCidade: selectModel;

  uploadedFile: any;
  fileName: string = "";

  invalid = null;

  visible: string = "none";
  
  constructor(
    private enderecoService: EnderecoService,
    private enviarSolicitacaoService: EnviarSolicitacoService
  ) {
    this.dropdownUf = [
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

    this.dropdownEstado = this.dropdownUf;
  
    this.dropdownCidade = [
      { name: '--', code: '--' },
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' },
    ];
  }

  ngOnInit(): void {
  }

  public onUpload(): void {
    var inputFile = document.createElement("input");

    inputFile.type = "file";
    inputFile.accept = "image/png, image/jpg, .doc, .docx, .pdf, .zip, .rar";
    inputFile.style.display = "none";
    document.body.appendChild(inputFile);
    inputFile.click();

    inputFile.onchange = (e: any) => {
      // this.uploadedFiles.push(e.target.files[0]);
      this.uploadedFile = e.target.files[0];
      this.fileName = e.target.files[0].name;
    }

    inputFile.remove();
  }
  
  consultaEndereco() {
    var endereco = this.solicitacao.solicitante.endereco;
    
    if (endereco.cep.replace(/[^0-9]+/g, '').length == 8) {
      this.visible = "flex";
      this.enderecoService.buscaEnderecoCEP(endereco.cep.replace(/[^0-9]+/g, ''))
      .subscribe({
        next: (data) => {
            endereco.cep = data.cep;
            endereco.logradouro = data.logradouro;
            endereco.bairro = data.bairro;
            endereco.estado = data.uf;
            endereco.cidade = data.localidade;
            this.selectedEstado = {
              name: data.uf,
              code: data.uf
            };
            
          },
        complete : () => { this.visible = "none"; },
        error : () => { this.visible = "none"; }
      });      
    }
  }

  public enviarSolicitacao(addForm: NgForm): void {

    this.solicitacao.solicitante.uf = this.selectedUf.name;
    
    this.enviarSolicitacaoService.enviarSolicitacao(this.solicitacao).subscribe(
      (response: Solicitacao) => {
        console.log(response);
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
    
  }
  
  formGroup: any;
  informationForm: any;

  public onSubmit(addForm: NgForm): void {

    this.solicitacao.solicitante.uf = this.selectedUf.name;

    const formData: FormData = new FormData();
    formData.append('assunto', this.solicitacao.assunto);
    formData.append('mensagem', this.solicitacao.mensagem);
    formData.append('justificativa', this.solicitacao.justificativa);
    formData.append('arquivo', this.uploadedFile);
    formData.append('nome', this.solicitacao.solicitante.nome);
    formData.append('crm', (this.solicitacao.solicitante.crm).toString());
    formData.append('uf', this.solicitacao.solicitante.uf);
    formData.append('cpf', this.solicitacao.solicitante.cpf);
    formData.append('email', this.solicitacao.solicitante.email);
    formData.append('cep', this.solicitacao.solicitante.endereco.cep);
    formData.append('logradouro', this.solicitacao.solicitante.endereco.logradouro);
    formData.append('numero', this.solicitacao.solicitante.endereco.numero);
    formData.append('bairro', this.solicitacao.solicitante.endereco.bairro);
    formData.append('estado', this.solicitacao.solicitante.endereco.estado);
    formData.append('cidade', this.solicitacao.solicitante.endereco.cidade);
    formData.append('telefone', this.solicitacao.solicitante.endereco.telefone);
    formData.append('celular', this.solicitacao.solicitante.endereco.celular);

    this.enviarSolicitacaoService.save(formData).subscribe(
      (response: Solicitacao) => {
        console.log(response);
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
   
  }

}
