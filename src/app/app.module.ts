import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlackComponent } from './black/black.component';
import { WhiteComponent } from './white/white.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackComponent,
    WhiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
