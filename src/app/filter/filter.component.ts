import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MovieApiService} from '../movie.service'
import {Movie} from '../movie.service'
import {Router} from '@angular/router'



@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [MovieApiService]
})

export class FilterComponent implements OnInit {
  @Input() movie: Movie;
  selectedFilter: string ='';
  genreShow: boolean=false;
  selectedGenre: string='';
  selectedPopularity: string='';
  popularityShow: boolean=false;
  moviesDisplay: boolean=true;
// @Output() deleted = new EventEmitter<string>();

  constructor(public movieApiService: MovieApiService, private router: Router) { }

  ngOnInit(): void {
    this.movieApiService.getMovies();
  }



  onOptionsSelected (event: any){
    //console.log(value);
    this.selectedFilter = event.target.value;
    //console.log(this.selectedFilter);
    if(this.selectedFilter==='genre'){
      this.genreShow=true;
      this.popularityShow=false;
      
    } else if(this.selectedFilter==='popularity'){
      this.popularityShow=true;
      this.genreShow=false;
    } else{
      this.genreShow=false;
      this.popularityShow=false;
      this.router.navigate(['favorites']);
      

    }
  }

  onGenreSelected (event: any){
    //console.log(value);
    let genreSelection = this.selectedGenre = event.target.value;
    //console.log(this.selectedGenre);
    this.getMoviesOfGenre(genreSelection);
  
  }

  onPopularitySelected (event: any){
    //console.log(value);
    this.selectedPopularity = event.target.value;
    console.log(this.selectedPopularity);
    if(this.selectedPopularity==='high'){
      
    }
  }

  getMoviesOfGenre(genreId: string) : Movie[]{
    const genre= genreId;
    let allMovies= this.movieApiService.movies;
    console.log(allMovies);
    // return allMovies.filter((todo) => {
  
    //    return allMovies.genre_id.includes(genre);
    //  });
    


  }

}
