import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService,
              private router: Router) {
    // console.log("Constructor");
  }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    // console.log( this.heroes );
  }

  verHeroe( idx: number ){
    console.log(idx);
    this.router.navigate( ['/heroe', idx] );
  }

}
