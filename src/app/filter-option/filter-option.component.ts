import { Component, OnInit } from '@angular/core';
//import {FilterComponent} from '../filter';
import {MovieApiService} from '../movie.service'
import {Movie} from '../movie.service'

@Component({
  selector: 'app-filter-option',
  templateUrl: './filter-option.component.html',
  styleUrls: ['./filter-option.component.css']
})

export class FilterOptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
