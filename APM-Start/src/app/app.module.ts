import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  //needed to find pm-root directive
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  //startup component
  bootstrap: [AppComponent]
})
export class AppModule { }
