import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {MovieApiService} from '../movie.service';
import {Movie} from '../movie.service'; 


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'], 
  providers: [MovieApiService]
})
export class NavbarComponent implements OnInit {

  @Input() movie: Movie; 
  @Output() searchCriteria = new EventEmitter<string>(); 
  
  public filterString: string =""; 
  // results = this.movieApiService.getMovies();
   
  //  getSearchResults(): Movie[] {
  //   console.log(this.filter); 
  //     return this.results.filter((mov) => {
  //      const movieLower = mov.title.toLowerCase(); 
  //      const filterLower = this.filter.toLocaleLowerCase(); 
  //      return movieLower.includes(filterLower);  
  //   }); 
  // }

 
 
  constructor(public movieApiService: MovieApiService) { }

  ngOnInit(): void {
    
  }

}
