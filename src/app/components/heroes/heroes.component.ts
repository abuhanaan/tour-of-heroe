import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/hero';
import { HEROES } from 'src/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

  heroes: Hero[] = []
  selectedHero?: Hero

  constructor(private heroService: HeroService) {
    
  }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

}
