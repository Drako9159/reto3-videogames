import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

  }
  onLogin() {
    console.log(this.loginForm)
    if (this.loginForm.valid) {
      console.log('Login Success');
      const isValidUser = this.authService.login(
        this.loginForm.get('email')?.value,
        this.loginForm.get('password')?.value
      );
      if (isValidUser) {
        this.router.navigate(['/', 'most-populate']);
      } else {
        console.log('User not exist');
      }
    } else {
      this.loginForm.markAllAsTouched();
      console.log('Insert all inputs');
    }
  }
  onSignIn() {
    this.router.navigate(['/', 'auth', "sign-in"]);
  }
}
