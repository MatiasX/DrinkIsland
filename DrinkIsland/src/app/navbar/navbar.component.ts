import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  isLoggedIn: any = false;

  constructor(private http: HttpClient, private router:Router) {
    this.isLoggedIn= localStorage.getItem('isLoggedIn')
   }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit():void{
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === "true";
  }

  logout():void{
    const authToken = localStorage.getItem('authToken');
    console.log("Token:", authToken);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    console.log("headers: ",headers);
    this.http.post<any>('http://127.0.0.1:8000/api/logout',{},{ headers:headers }).subscribe({
     next: (response) => {
      console.log("kiléptem")
        localStorage.removeItem('authToken');
        localStorage.removeItem('isLoggedIn');       
        this.router.navigate(['/loginsignup']);

      },
     error: error => {
        console.error('Failed to logout in user:', error);
        // Optionally, you can display an error message to the user
      }
    })
  }


}
