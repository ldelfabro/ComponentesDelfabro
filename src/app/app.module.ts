import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLeftComponent } from './Principal/menu-left/menu-left.component';
import { ToolbarComponent } from './Principal/toolbar/toolbar.component';
import { ContenedorPrincipalComponent } from './Principal/contenedor-principal/contenedor-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLeftComponent,
    ToolbarComponent,
    ContenedorPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
