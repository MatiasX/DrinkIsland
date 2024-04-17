import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMenuOpen: boolean = false;
  isLoggedIn: any = false;
  isAdmin= false;

  constructor(private signIn: LoginService, private router:Router) { }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit():void{
    this.signIn.userLogInsub.subscribe(res => {this.isLoggedIn=res})

  }

 logout(){
  this.signIn.logout();
 }


}
