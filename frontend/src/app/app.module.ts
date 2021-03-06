//Importando o LOCALE_ID para configurar a localização para PT
import { NgModule, LOCALE_ID } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HeaderComponent } from './components/template/header/header.component'
import { FooterComponent } from './components/template/footer/footer.component'
import { NavComponent } from './components/template/nav/nav.component'
import { HomeComponent } from './views/home/home.component'
import { DebtsCrudComponent } from './views/debts-crud/debts-crud.component'
import { CreditsCrudComponent } from './views/credits-crud/credits-crud.component'
import { DebtCreateComponent } from './components/debt/debt-create/debt-create.component'
import { CreditCreateComponent } from './components/credit/credit-create/credit-create.component'
import { DebtReadComponent } from './components/debt/debt-read/debt-read.component'
import { DebtRead2Component } from './components/debt/debt-read2/debt-read2.component'
import { CreditReadComponent } from './components/credit/credit-read/credit-read.component'
import { RedDirective } from './directives/red.directive'
import { ButtonSaveDirective } from './directives/button-save.directive'
import { GeneralButtonDirective } from './directives/general-button.directive'

// Toolbar do Material => Será utilizado para trabalhar com o template dentro do header component
import { MatToolbarModule } from '@angular/material/toolbar';

//Dois módulos que serão utilizados em nav component
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

//Módulos para auxiliar no home component
import { MatCardModule } from '@angular/material/card';

//Módulo para botão
import { MatButtonModule } from '@angular/material/button';

//Módulo para usar o recurso de snack-bar
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ButtonCancelDirective } from './directives/button-cancel.directive';

//Módulo para utilizar os serviços HTTP
import { HttpClientModule } from '@angular/common/http';

//Módulos para trabalhar com formulários
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

//Schematics Table
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

//Importar localePt e registerLocaleData para registrar localização
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    DebtsCrudComponent,
    DebtCreateComponent,
    RedDirective,
    ButtonCancelDirective,
    ButtonSaveDirective,
    GeneralButtonDirective,
    CreditsCrudComponent,
    CreditCreateComponent,
    DebtReadComponent,
    CreditReadComponent,
    DebtRead2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
