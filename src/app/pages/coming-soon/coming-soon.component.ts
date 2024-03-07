import { Component } from '@angular/core';
import { CardGameComponent } from '../../components/card-game/card-game.component';
import { Game } from '../../models/game';
import { GamesService } from '../../service/games.service';
import { NavComponent } from '../../shared/nav/nav.component';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [CardGameComponent, NavComponent],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.css'
})
export class ComingSoonComponent {
  gameList!: Game[];

  constructor(private gameService: GamesService) {}

  ngOnInit(): void {
    this.gameService.getGamesComingSoon().subscribe({
      next: (data) => {
        this.gameList = data;
        console.log(this.gameList);
      },
    });
  }
}
