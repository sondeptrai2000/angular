import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {inputComponent} from '../input/input.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [inputComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
