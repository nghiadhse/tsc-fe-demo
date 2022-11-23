import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextRoutingModule } from './input-text-routing.module';
import { InputTextComponent } from './input-text.component';

import { InputGroupModule, InputTextModule as mkInputTextModule, BoxModule } from 'angular-admin-lte';
import { InputTextService } from './inpute-text.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BoxModule,
    InputTextRoutingModule,
    mkInputTextModule,
    InputGroupModule
    
  ],
  declarations: [InputTextComponent],
  providers: [
    InputTextService
  ]
})
export class InputTextModule { }
