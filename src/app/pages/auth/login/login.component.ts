import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  userFound!: boolean;

  constructor(private router: Router, private authService: AuthService) {
    this.userFound = true;
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  onLogin() {
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      console.log('Data is validate');
      const isValidUser = this.authService.login(
        this.loginForm.get('email')?.value,
        this.loginForm.get('password')?.value
      );
      
      if (isValidUser) {
        this.router.navigate(['/', 'most-populate']);
      } else {
        console.log('User not exist');
        this.userFound = false
      }
    } else {
      this.loginForm.markAllAsTouched();
      console.log('Insert all inputs');
    }
  }
  onSignIn() {
    this.router.navigate(['/', 'auth', 'sign-in']);
  }
}
