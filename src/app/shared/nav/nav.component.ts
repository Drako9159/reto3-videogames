import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit {
  

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}
  ngLogout() {
    this.authService.logout();
    this.router.navigate(['/module-auth/auth/login']);
  }
}
