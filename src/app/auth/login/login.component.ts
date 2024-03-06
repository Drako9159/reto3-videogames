import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Login Success');
      const isValidUser = this.authService.login(
        this.loginForm.get('email').value,
        this.loginForm.get('password').value
      );

      if (isValidUser) {
        this.router.navigate(['/', 'module-home', 'home', 'dashboard']);
      } else {
        console.log('User not exist');
      }
    } else {
      this.loginForm.markAllAsTouched();
      console.log('Insert all inputs');
    }
  }
  onSignIn() {
    this.router.navigate(['/', 'module-auth', 'sign-in']);
  }
}
