import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Hero } from 'src/hero';
import { HEROES } from 'src/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // URL to web api
  private heroesUrl = 'api/heroes'

  constructor(private messageService: MessageService, private http: HttpClient) { }

  // Log a HeroService message with the MessageService
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes(): Observable<Hero[]>{
    // now works asynchronously with Http
    this.messageService.add('HeroService: fetched heroes')
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((myHero) => myHero.id === id)!
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of(hero)
  }
}
