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
  togglePasswordVisibility(): void {
    const passwordField: HTMLInputElement | null = document.getElementById('password') as HTMLInputElement;
    const passwordToggle: HTMLElement | null = document.getElementById('password-toggle');

    if (passwordField && passwordToggle) {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            passwordToggle.classList.remove('fa-eye');
            passwordToggle.classList.add('fa-eye-slash');
        } else {
            passwordField.type = 'password';
            passwordToggle.classList.remove('fa-eye-slash');
            passwordToggle.classList.add('fa-eye');
        }
    }
}

togglePasswordVisibility1(): void {
    const passwordConfirmationField: HTMLInputElement | null = document.getElementById('password_confirmation') as HTMLInputElement;
    const passwordToggle: HTMLElement | null = document.getElementById('password-toggle1');

    if (passwordConfirmationField && passwordToggle) {
        if (passwordConfirmationField.type === 'password') {
            passwordConfirmationField.type = 'text';
            passwordToggle.classList.remove('fa-eye');
            passwordToggle.classList.add('fa-eye-slash');
        } else {
            passwordConfirmationField.type = 'password';
            passwordToggle.classList.remove('fa-eye-slash');
            passwordToggle.classList.add('fa-eye');
        }
    }
}
}
