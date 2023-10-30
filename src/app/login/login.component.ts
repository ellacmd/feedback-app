import { Component, inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GlobalService } from '../global.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [MatTabsModule, ReactiveFormsModule, NgIf],
})
export class LoginComponent {
  signupError = '';
  loginError = '';

  globalService = inject(GlobalService);

  constructor(private router: Router) {}

  signupForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get firstName() {
    return this.signupForm.get('firstName');
  }
  get lastName() {
    return this.signupForm.get('lastName');
  }
  get username() {
    return this.signupForm.get('username');
  }
  get password() {
    return this.signupForm.get('password');
  }

  get loginUsername() {
    return this.loginForm.get('username');
  }
  get loginPassword() {
    return this.loginForm.get('password');
  }

  handleSignup() {
    this.globalService
      .signup(
        this.signupForm.value.firstName ?? '',
        this.signupForm.value.lastName ?? '',
        this.signupForm.value.username ?? '',
        this.signupForm.value.password ?? ''
      )
      .subscribe({
        next: (res: any) => {
         
          localStorage.setItem('user', JSON.stringify(res));
          this.router.navigate([''], res);
        },
        error: ({ error }) => {
          this.signupError = error.message;
        },
      });
  }
  handleLogin() {
    this.globalService
      .login(
        this.loginForm.value.username ?? '',
        this.loginForm.value.password ?? ''
      )
      .subscribe({
        next: (res: any) => {
          localStorage.setItem('user', JSON.stringify(res));
          this.router.navigate([''], res);
        },
        error: ({ error }) => {
          this.loginError = error.message;
        },
      });
  }
}
