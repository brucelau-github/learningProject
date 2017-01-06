import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	template: `
	 	<h1> {{ title }} </h1>
	 	<nav>
		 	<a routerLink="/dashboard" routerLinkActive="active" >Dashboard</a>
		 	<a routerLink="/heroes" routerLinkActive="active" >Heroes</a>
		 	<a *ngFor="let hero of heroes"  [routerLink]="['/detail', hero.id]"  class="col-1-4"></a>
	 	</nav>
	 	<router-outlet></router-outlet>
			`,
	styleUrls: ['app.component.dss']

})
export class AppComponent { 
	title ='Tours of heros';
}
