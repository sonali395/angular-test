import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { Mylib2Module } from 'mylib2';


@NgModule({
  declarations: [MyLibComponent],
  imports: [
    Mylib2Module
  ],
  exports: [MyLibComponent]
})
export class MyLibModule { }
