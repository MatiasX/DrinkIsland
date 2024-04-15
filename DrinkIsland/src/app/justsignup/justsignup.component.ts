import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-justsignup',
  templateUrl: './justsignup.component.html',
  styleUrls: ['./justsignup.component.css']
})
export class JustsignupComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private registrationService: RegistrationService) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const userData = this.registrationForm.value;
      this.registrationService.register(userData).subscribe(
        response => {
          // Handle success response from backend
          console.log('Registration successful:', response);
        },
        error => {
          // Handle error response from backend
          console.error('Registration failed:', error);
        }
      );
    }
  }
}
