import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit {

  group: FormGroup;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.group = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      confirmPassword: new FormControl("", [Validators.required])
    })
  }
  onSignIn() {
    console.log("FormGroup: ", this.group)
    const values = this.group.value;
    const formIsValid = this.group.valid;
    const controlName = this.group.get("name");
    const controlNameIsValid = this.group.get("name").valid;

    if(values.password === values.confirmPassword) {
      console.log("Form is valid")
      this.authService.signIn(values.name, values.email, values.password)
      this.router.navigate(["/", "module-home", "home", "dashboard"])
    } else {
      console.log("Password is invalid")
    }
  }
}
