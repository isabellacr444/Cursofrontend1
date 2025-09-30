import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteFormComponent } from './section/cliente-form/cliente-form.component';
import { ProdutoFormComponent } from './section/produto-form/produto-form.component';
import { PedidosListComponent } from './section/pedidos-list/pedidos-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClienteFormComponent,
    ProdutoFormComponent,
    ProdutoFormComponent,
    PedidosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 FormsModule
