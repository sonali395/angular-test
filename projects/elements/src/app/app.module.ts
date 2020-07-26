import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { Mylib2Module, Mylib2Component } from 'mylib2';

@NgModule({
  imports: [
    BrowserModule,
    Mylib2Module,
  ],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector){
    const elementOne = createCustomElement(Mylib2Component, { injector: this.injector })
    customElements.define("elements-test-lib2", elementOne);
  }

  ngDoBootstrap(){
  }
 }
