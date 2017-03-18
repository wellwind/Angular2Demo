import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  login = {
    username: 'wellwind',
    password: '1234'
  };
  disabledCustomForm = false;

  showLogin() {
    console.log(this.login);
  }

  userChange($event) {
    console.log($event);
  }

}
