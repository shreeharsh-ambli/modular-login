import { Component } from '@angular/core';
import { MdDialog } from "@angular/material";
import { LoginModule } from "./login/login.module";
import { LoginDialogComponent } from './login/login-dialog/login-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private loginDialog: MdDialog) { }

  showLogin() {
    this.loginDialog.open(LoginDialogComponent);
  }
}
