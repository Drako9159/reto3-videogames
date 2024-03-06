import { Component, OnInit } from '@angular/core';
import { CardGameComponent } from '../../components/card-game/card-game.component';
import { Game } from '../../models/game';
import { GamesService } from '../../service/games.service';

@Component({
  selector: 'app-most-populate',
  standalone: true,
  imports: [CardGameComponent],
  templateUrl: './most-populate.component.html',
  styleUrl: './most-populate.component.css',
})
export class MostPopulateComponent implements OnInit {
  //gameTest = new Game();
  gameList!: Game[];

  constructor(private gameService: GamesService) {}

  ngOnInit(): void {
    this.gameService.getGamesPopulate().subscribe({
      next: (data) => {
        this.gameList = data;
        console.log(this.gameList);
      },
    });
  }
  
}
