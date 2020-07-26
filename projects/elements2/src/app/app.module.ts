import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';
import { MyLibComponent, MyLibModule } from 'my-lib';

@NgModule({
  imports: [
    BrowserModule,
    MyLibModule
  ],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector){
    const elementTwo = createCustomElement(MyLibComponent, { injector: this.injector })
    customElements.define("elements-test-lib1", elementTwo);
  }

  ngDoBootstrap(){
  }
 }
