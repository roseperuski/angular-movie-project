import { Component, OnInit, Input } from '@angular/core';
import {Movie} from '../movie.service'
import {MovieApiService} from '../movie.service'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})


export class FavoritesComponent implements OnInit {

    @Input() movie: Movie;

   result: Movie[]= [
    {poster_path: "soulpic", title: "Soul", genre_ids: [2,1], vote_average: 1, adult: false},
   
  ]

  removeFavorite = function(): void{
    let index = this.results.findIndex(function(remove){
       return remove;     
    })
    this.results.splice(index,1);
  }

//    constructor() { }

//    ngOnInit(): void {

// }

constructor(public movieApiService: MovieApiService) { }

ngOnInit(): void {
  this.movieApiService.getMovies();
}
}
