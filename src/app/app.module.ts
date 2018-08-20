import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InitSectionComponent } from './home-page/init-section/init-section.component';
import { NosotrosSectionComponent } from './home-page/nosotros-section/nosotros-section.component';
import { EquipoSectionComponent } from './home-page/equipo-section/equipo-section.component';
import { ServiciosSectionComponent } from './home-page/servicios-section/servicios-section.component';
import { PortfolioSectionComponent } from './home-page/portfolio-section/portfolio-section.component';
import { ContactoSectionComponent } from './home-page/contacto-section/contacto-section.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    InitSectionComponent,
    NosotrosSectionComponent,
    EquipoSectionComponent,
    ServiciosSectionComponent,
    PortfolioSectionComponent,
    ContactoSectionComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
