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
  //selectedRuntime: string='';
  popularityShow: boolean=false;
  moviesDisplay: boolean=true;
  genreDisplay: boolean=false;
  popularityDisplay: boolean=false;
  runtimeShow:boolean=false;
  runtimeDisplay: boolean=false;
  theseMovies : Movie []=[];
// @Output() deleted = new EventEmitter<string>();

  public selectedMovie: Movie;

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
      this.runtimeShow=false;
      
    } else if(this.selectedFilter==='popularity'){
      this.popularityShow=true;
      this.genreShow=false;
      this.runtimeShow=false;

    } else if (this.selectedFilter==='runtime'){
      this.genreShow=false;
      this.popularityShow=false;
      this.runtimeShow=true;
     

    }
  }

  onGenreSelected (event: any){
    this.theseMovies=[];
    this.moviesDisplay=false;
    
    let genreSelection = this.selectedGenre = event.target.value;
    genreSelection= parseInt(genreSelection);
    console.log(genreSelection);
    this.getMoviesOfGenre(genreSelection);
  
  }

  onPopularitySelected (event: any){
    
    this.theseMovies=this.movieApiService.movies;
    this.selectedPopularity = event.target.value;
    
    if(this.selectedPopularity==='high'){
      
      this.theseMovies.sort((a,b) => (a.vote_average < b.vote_average) ? 1 :-1 );
    //   for (const movie of this.theseMovies) {
    //     console.log ("array sorted low to high: " + movie.vote_average);
    // }
      }
    else if(this.selectedPopularity==="low")  {
      this.theseMovies.sort((a,b) => (a.vote_average > b.vote_average) ? 1 :-1 );
      
    }
    else{

    }
    this.genreDisplay=true;
    this.popularityDisplay=true;

    
  }

  onRuntimeSelected (event: any){
    
    this.theseMovies=this.movieApiService.movies;
    this.selectedPopularity = event.target.value;
    console.log(this.theseMovies);
    
    if(this.selectedPopularity==='high'){
      
      this.theseMovies.sort((a,b) => (a.runtime < b.runtime) ? 1 :-1 );
      for (const movie of this.theseMovies) {
        console.log ("array sorted low to high: " + movie.runtime);
    }
      }
    else if(this.selectedPopularity==="low")  {
      this.theseMovies.sort((a,b) => (a.runtime > b.runtime) ? 1 :-1 );
      
    }
    else{

    }
    this.genreDisplay=true;
    this.runtimeDisplay=true;

    
  }

  getMoviesOfGenre(genreId: number) : void{
    this.genreDisplay=false;
    
    let allMovies= this.movieApiService.movies;
    
    
    for (const movie of allMovies) {
      if(movie.genre_ids.includes(genreId)) {
        this.theseMovies.push(movie);
      }
      }

      console.log(this.theseMovies);
      this.genreDisplay=true;
          
    }  

    favorite(movie: Movie) {
      console.log(movie);
      this.movieApiService.favorites.push(movie);
      console.log(this.movieApiService.favorites);
    }

    selectMovie(movie: Movie) {
      this.selectedMovie = movie;
    }
    
  }


