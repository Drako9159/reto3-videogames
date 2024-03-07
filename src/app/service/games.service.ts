import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private http: HttpClient) {}

  getGames(): Observable<any> {
    return this.http.get('http://localhost:3000/games');
  }

  getGamesPopulate(): Observable<any> {
    return this.getGames().pipe(
      map((data: any) => data.filter((e: any) => e.rating > 4))
    );
  }

  getGamesDownloaded(): Observable<any> {
    return this.getGames().pipe(
      map((data: any) => data.filter((e: any) => e.downloads > 100))
    );
  }

  getGamesComingSoon(): Observable<any> {
    return this.getGames().pipe(
      map((data: any) => data.filter((e: any) => e.comingSoon === true))
    );
  }
}
