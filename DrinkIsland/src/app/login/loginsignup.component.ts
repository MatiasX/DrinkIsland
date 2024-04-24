import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

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
