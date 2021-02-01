import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MovieApiService} from '../movie.service'
import {Movie} from '../movie.service'
import {Router} from '@angular/router'



@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: []
})

export class FilterComponent implements OnInit {
  @Input() movie: Movie;
  selectedFilter: string ='';
  genreShow: boolean=false;
  selectedGenre: string='';
  selectedPopularity: string='';
  //selectedrelease: string='';
  popularityShow: boolean=false;
  moviesDisplay: boolean=true;
  genreDisplay: boolean=false;
  popularityDisplay: boolean=false;
  releaseShow:boolean=false;
  releaseDisplay: boolean=false;
  theseMovies : Movie []=[];
// @Output() deleted = new EventEmitter<string>();

  public selectedMovie: Movie;

  constructor(public movieApiService: MovieApiService,private router: Router) { }
 
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
      this.releaseShow=false;
      this.popularityDisplay=false;
      this.genreDisplay=false;
      
    } else if(this.selectedFilter==='popularity'){
      this.popularityShow=true;
      this.genreShow=false;
      this.releaseShow=false;
      this.releaseDisplay=false;

    } else if (this.selectedFilter==='release'){
      this.genreShow=false;
      this.popularityShow=false;
      this.releaseShow=true;
      this.popularityDisplay=false;
     

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

  onReleaseSelected (event: any){
    
    this.theseMovies=this.movieApiService.movies;
    this.selectedPopularity = event.target.value;
    console.log(this.theseMovies);
    
    if(this.selectedPopularity==='high'){
      
      this.theseMovies.sort((a,b) => (a.release_date < b.release_date) ? 1 :-1 );
      for (const movie of this.theseMovies) {
        console.log ("array sorted low to high: " + movie.release_date);
    }
      }
    else if(this.selectedPopularity==="low")  {
      this.theseMovies.sort((a,b) => (a.release_date > b.release_date) ? 1 :-1 );
      
    }
    else{

    }
    this.genreDisplay=true;
    this.releaseDisplay=true;

    
  }

  getMoviesOfGenre(genreId: number) : void{
    this.genreDisplay=false;
    this.releaseDisplay=false;
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


