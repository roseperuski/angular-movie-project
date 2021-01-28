import { Component, OnInit } from '@angular/core';
import {MovieApiService} from '../movie.service';
import {Movie} from '../movie.service'; 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'], 
  providers: [MovieApiService]
})
export class SearchComponent implements OnInit {
  filter: string =""; 

  movies = this.movieApiService.getMovies();
  
   getSearchResults(): Movie[] {
    return this.movies.filter((movies) => {
      const movieLower = movies.name.toLowerCase(); 
      const filterLower = this.filter.toLocaleLowerCase(); 
      return movieLower.includes(filterLower); 
    }); 
  }
  constructor(public movieApiService: MovieApiService) { }

  ngOnInit(): void {
    this.movieApiService.getMovies();
  }
}
