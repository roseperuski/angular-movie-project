import { Component, OnInit } from '@angular/core';
import {MovieApiService} from '../movie.service'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [MovieApiService]
})

export class FilterComponent implements OnInit {
  
  constructor(public movieApiService: MovieApiService) { }

  ngOnInit(): void {
    this.movieApiService.getMovies();
  }

}
