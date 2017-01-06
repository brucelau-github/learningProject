import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service'

@Component({
	moduleId: module.id,
	selector: 'user',
	templateUrl: 'user.component.html',
	providers: [PostsService]
})
export class UserComponent  { 
	name: string ;
	email: string; 
	address: address;
	hobbies: string[];
	ShowHobbies: boolean;
	posts:posts
	constructor(private postsService: PostsService){
		this.name = 'Bruce Lau';
		this.email = 'brucelau.email@gmail.com'; 
		this.address = {
			street: '305 Josephine',
			city: 'Windsor',
			state: 'Ontario'
		}
		this.hobbies = ['Mustic','Music','Sports'];
		this.ShowHobbies = false;
		this.postsService.getPosts().subscribe(posts=>{
				this.posts = posts;
		});
	}
	toggleHobbies(){
		if(this.ShowHobbies == false) {
			this.ShowHobbies = true;
		} else {
			this.ShowHobbies = false;
		}
	}
	addHobby(hobby: string){
		this.hobbies.push(hobby);
	}
	deleteHobby(i: number){
		this.hobbies.splice(i,1);
	}
}

interface address {
	street: string;
	city: string;
	state: string;
}

interface posts {
	
	userId: number;
    id: number;
    title: string;
    body: string;
}