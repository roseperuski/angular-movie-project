import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {MovieApiService} from '../movie.service';
import {Movie} from '../movie.service'; 



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'], 
  providers: [MovieApiService]
})
export class NavbarComponent implements OnInit {public movieApiService: MovieApiService


  constructor() { }

  ngOnInit(): void {
    
  }

}
