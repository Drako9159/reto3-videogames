import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent implements OnInit {
  group!: FormGroup;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.group = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }
  onSignIn() {
    console.log('FormGroup: ', this.group);
    const values = this.group.value;
    const formIsValid = this.group.valid;
    if (formIsValid) {
      // const controlName = this.group.get('name');
      // const controlNameIsValid = this.group.get('name')?.valid;
      if (values.password === values.confirmPassword) {
        console.log('Form is valid');
        this.authService.signIn(values.name, values.email, values.password);
        this.router.navigate(['/', 'most-populate']);
      } else {
        console.log('Password is invalid');
      }
    }
  }
}
