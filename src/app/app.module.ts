import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdDialogModule } from '@angular/material';

import { AppComponent } from './app.component';

import { LoginModule } from './login/login.module';
import { LoginDialogComponent } from "./login/login-dialog/login-dialog.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdDialogModule,
    BrowserAnimationsModule,
    LoginModule
  ],
  entryComponents: [LoginDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
