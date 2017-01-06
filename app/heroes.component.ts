
import { Component,OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService} from './hero.service';
import { Router } from '@angular/router';



@Component({
	moduleId: module.id,
	selector: 'my-heroes',
	templateUrl: 'heroes.component.html',
	styleUrls:['heroes.component.css'] ,
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
	gotoDetail(): void {
		this.router.navigate(['/detail',this.selectedHero.id]);
	}
	delete(hero: Hero): void {
	this.heroService
		.delete(hero.id)
		.then(() => {
				this.heros = this.heros.filter((h: Hero) => h !== hero);
				if (this.selectedHero === hero) { this.selectedHero = null; }
			});
	}
	add(name: string): void {
	name = name.trim();
	if (!name) { return; }
	this.heroService.create(name)
		.then(hero => {
			this.heros.push(hero);
			this.selectedHero = null;
		});
	}
}
