import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParticlesDirective } from './directives/particles.directive';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, ParticlesDirective, HomeComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ScullyLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
