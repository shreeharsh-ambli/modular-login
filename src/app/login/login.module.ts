import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdDialogModule, MdInputModule } from '@angular/material';

import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MdDialogModule,
    MdInputModule
  ],
  exports: [LoginDialogComponent],
  declarations: [LoginDialogComponent]
})
export class LoginModule { }
