import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  password: string = '';
  password_confirmation: string = '';
  
  constructor(private profileService:ProfileService) { }

  setNewPassword(): void {
    const newPassword = {
      password: this.password,    
      password_confirmation: this.password_confirmation
    };
    this.profileService.setNewPassword(newPassword);
  }

  deleteAccount(): void {
    this.profileService.deleteAccount().subscribe(
      (response) => {
        console.log('Account deleted successfully:', response);
        localStorage.removeItem('authToken');
        localStorage.removeItem('isLoggedIn');
      },
      (error) => {
        console.error('Error deleting account:', error);
      }
    );
  }
}
