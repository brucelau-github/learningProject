
import { Component,OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService} from './hero.service';
import { Router } from '@angular/router';



@Component({
selector: 'my-heroes',
templateUrl: './heroes.component.html',
styleUrls:['./heroes.component.css'] ,
providers: [HeroService]

})
export class HeroesComponent implements OnInit { 
	constructor(private heroService: HeroService,private router: Router) {

	}
	title ='Tours of heros';
	heros: Hero[];
	selectedHero: Hero;
	ngOnInit():void {
		this.getHeroes();
	}
	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}
	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heros = heroes);
	}
	gotoDeail(): void {
		this.router.navigate(['/detial',this.selectedHero.id]);
	}
}
