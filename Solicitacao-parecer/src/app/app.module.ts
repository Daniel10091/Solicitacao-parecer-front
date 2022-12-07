import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { InstrucoesComponent } from './components/instrucoes/instrucoes.component';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    FormularioComponent,
    InstrucoesComponent
  ],
  imports: [
    AppRoutingModule,
    AppLayoutModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    InputTextareaModule,
    HttpClientModule,
    ButtonModule,
    InputMaskModule,
    ProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
