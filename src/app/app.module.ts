import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyLibModule } from 'my-lib';
import { Mylib2Module } from 'mylib2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyLibModule,
    Mylib2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
