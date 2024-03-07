import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: {
    id: number;
    name: string;
    email: string;
    password: string;
  }[] = [
    {
      id: 1,
      name: 'master',
      email: 'master@mail.com',
      password: 'master',
    },
  ];
  constructor(private router: Router) {
    console.log('Auth service');
  }

  login(email: string, password: string): boolean {
    const userFound = this.users.find(
      (user) => user.email === email && user.password === password
    );
    if (userFound) {
      localStorage.setItem('isLogged', JSON.stringify(userFound));
      return true;
    } else {
      localStorage.clear();
      return false;
    }
  }

  logout() {
    localStorage.clear();
  }

  signIn(name: string, email: string, password: string) {
    const lastUser = this.users[this.users.length - 1];
    const newUser = { name, email, password, id: lastUser.id + 1 };
    this.users = [...this.users, newUser];
    localStorage.setItem('isLogged', JSON.stringify(newUser));
  }

  isLogged() {
    const isLogged = localStorage.getItem('isLogged');
    console.log(isLogged);
    if (isLogged) {
      return true;
    } else {
      this.router.navigate(['/', 'auth', 'login']);
      return false;
    }
  }
}
