import { Component } from '@angular/core';
import { Hero } from 'src/hero';
import { HEROES } from 'src/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes: Hero[] = HEROES
  selectedHero?: Hero

  constructor() {
    
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

}
