import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NavComponent } from '../../shared/nav/nav.component';

@Component({
  selector: 'app-add-game',
  standalone: true,
  imports: [ReactiveFormsModule, NavComponent],
  templateUrl: './add-game.component.html',
  styleUrl: './add-game.component.css',
})
export class AddGameComponent implements OnInit {
  addGameForm!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.addGameForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      releaseDate: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required),
      downloads: new FormControl('', Validators.required),
      comingSoon: new FormControl('', Validators.required),
    });
  }
  ngOnAdd() {
    console.log(this.addGameForm);
  }
}
