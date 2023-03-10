import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/hero';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = []

  constructor(private heroService: HeroService, public messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      // gets first five from the array heroes
      this.heroes = heroes.slice(1, 5)
    })
  }

}
