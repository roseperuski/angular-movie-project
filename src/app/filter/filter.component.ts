import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MovieApiService} from '../movie.service'
import {Movie} from '../movie.service'



@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [MovieApiService]
})

export class FilterComponent implements OnInit {
  @Input() movie: Movie;
// @Output() deleted = new EventEmitter<string>();

  constructor(public movieApiService: MovieApiService) { }

  ngOnInit(): void {
    this.movieApiService.getMovies();
  }

  filterBy(option: string){
    console.log(option);

  }

}
