import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.css']
})
export class SelectedMovieComponent implements OnInit {
  @Input() movie;

  constructor() { }

  ngOnInit(): void {
  }

}
