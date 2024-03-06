import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-game.component.html',
  styleUrl: './card-game.component.css',
})
export class CardGameComponent implements OnInit {
  @Input()
  game!: Game;

  constructor() {}
  ngOnInit(): void {}

  getRoundedRating(rating: number): number[] {
    const roundedRating = Math.round(rating);
    return Array.from({ length: roundedRating }, (_, index) => index + 1);
  }
}
