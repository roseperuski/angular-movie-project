import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { title } from "process";

interface Response {
  results: Movie[];
  page: number;
}

export interface Movie {
  poster_path: string;
  title: string;
  // popularity: number;
  genre_ids: number[];
  vote_average: number;
  adult: boolean;
  overview: string;
  runtime: number;
  
}

@Injectable({
  providedIn: "root",
})

export class MovieApiService {
  apiKey = "42977a8dd424f3000c916b42cde6f38b";
  url = "https://api.themoviedb.org/3/discover/movie"
 // url = "https://api.themoviedb.org/3/genre/movie/list";
    public movies: Movie[]=[];
  constructor(private http: HttpClient) {}

  public favorites: Movie[] = [
    {
      title: "My Movie",
      poster_path: "",
      genre_ids: [1,2],
      vote_average: 2,
      adult: false,
      overview: "",
      runtime: 222,
    },
  ];

  getMovies() {
    const requestUrl =
      this.getUrlWithAPIKey(); // add whatever params you want from here: https://developers.themoviedb.org/3/discover/movie-discover

    
    this.http.get(requestUrl).subscribe(
      (response: Response) => {
        //console.log(response.results);
        //this.movies = response.results;
        const movies2 = response.results;

        for(let movie of movies2){
          const movieResult : Movie = {
            poster_path:"https://image.tmdb.org/t/p/w500" + movie.poster_path,
            title: movie.title,
            genre_ids: movie.genre_ids,
            vote_average: movie.vote_average,
            adult: movie.adult,
            overview: movie.overview,
            runtime: movie.runtime,
          }
          if(movieResult.adult===false){
            this.movies.push(movieResult);
          }
          
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getUrlWithAPIKey() {
    return `${this.url}?api_key=${this.apiKey}&language=en-US`;
  }
}