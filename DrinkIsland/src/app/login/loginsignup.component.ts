import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.css']
})
export class LoginsignupComponent {
  username: string = '';
  password: string = '';
  
  constructor(private signIn:LoginService) { }

  login(): void {
    const userData = {
      username: this.username,
      password: this.password
    };
    this.signIn.signIn(userData);
    
  }
}
