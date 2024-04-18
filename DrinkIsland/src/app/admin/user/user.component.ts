import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userek: any[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.loadUserek();
  }

  loadUserek(): void {
    this.adminService.getUsers().subscribe(
      response => {
        this.userek = response;
      },
      error => {
        console.error('Error loading data:', error);
      }
    );
  }
  setAdmin(user: any): void {
    this.adminService.setAdmin(user).subscribe(
      response => {
        console.log('Data updated successfully:', response);
        this.loadUserek();
      },
      error => {
        console.error('Error updating data:', error);
      }
    );
  }
}
