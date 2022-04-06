import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgThreeModule } from '@personal-app/ng-three';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgThreeModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
