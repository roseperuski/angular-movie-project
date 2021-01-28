import { Component, OnInit } from '@angular/core';
import {MovieApiService} from '../movie.service';
//import {Movie} from '../movie.service'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'], 
  providers: [MovieApiService]
})
export class NavbarComponent implements OnInit {

  // filter: string =""; 

  // movies = this.movieApiService.getMovies();
  
  //  getSearchResults(): Movie[] {
  //   return this.movies.filter((mov) => {
  //     const movieLower = movies.name.toLowerCase(); 
  //     const filterLower = this.filter.toLocaleLowerCase(); 
  //     return movieLower.includes(filterLower); 
  //   }); 
  // }

  constructor(public movieApiService: MovieApiService) { }

  ngOnInit(): void {
    
  }

}
