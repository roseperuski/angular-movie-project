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
  genreDisplay: boolean=false;
  theseMovies : Movie []=[];
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
    this.theseMovies=[];
    this.moviesDisplay=false;
    
    let genreSelection = this.selectedGenre = event.target.value;
    genreSelection= parseInt(genreSelection);
    console.log(genreSelection);
    this.getMoviesOfGenre(genreSelection);
  
  }

  onPopularitySelected (event: any){
    //console.log(value);
    this.selectedPopularity = event.target.value;
    console.log(this.selectedPopularity);
    if(this.selectedPopularity==='high'){
      
    }
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

    
    
  }


