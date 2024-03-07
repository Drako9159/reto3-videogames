import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { GamesService } from '../../service/games.service';
import { CardGameComponent } from '../../components/card-game/card-game.component';
import { NavComponent } from '../../shared/nav/nav.component';

@Component({
  selector: 'app-most-downloaded',
  standalone: true,
  imports: [CardGameComponent, NavComponent],
  templateUrl: './most-downloaded.component.html',
  styleUrl: './most-downloaded.component.css'
})
export class MostDownloadedComponent {

  gameList!: Game[];

  constructor(private gameService: GamesService) {}

  ngOnInit(): void {
    this.gameService.getGamesDownloaded().subscribe({
      next: (data) => {
        this.gameList = data;
        console.log(this.gameList);
      },
    });
  }

}
