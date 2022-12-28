import { Injectable } from '@angular/core';
import { Hero } from 'src/hero';
import { HEROES } from 'src/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES
  }
}
