import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { DebtsCrudComponent } from './views/debts-crud/debts-crud.component';
import { RedDirective } from './directives/red.directive';

// Toolbar do Material => Será utilizado para trabalhar com o template dentro do header component
import { MatToolbarModule } from '@angular/material/toolbar';

//Dois módulos que serão utilizados em nav component
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

//Módulos para auxiliar no home component
import { MatCardModule } from '@angular/material/card';
import { DebtCreateComponent } from './components/debt/debt-create/debt-create.component';

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
import { ButtonSaveDirective } from './directives/button-save.directive';

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
    ButtonSaveDirective
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
