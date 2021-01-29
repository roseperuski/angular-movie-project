import { Component, OnInit, Input } from '@angular/core';
import {Movie} from '../movie.service'
import {MovieApiService} from '../movie.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})


export class FavoritesComponent implements OnInit {

    @Input() movie: Movie;

constructor(public movieApiService: MovieApiService) { }

removeFavorite(index: number) {
  this.movieApiService.favorites.splice(index, 1);
}
ngOnInit(): void {
  // this.movieApiService.getMovies();
}
}
