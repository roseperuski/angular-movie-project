import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface Response {
  results: Movie[];
  page: number;
}

interface Movie {
  poster_path: string;
  title: string;
  // popularity: number;
  genre_ids: number[];
  vote_average: number;
  
  
  // release_date: string;
  
  // id: number;
  
  // original_language: string;
  
  // backdrop_path: string;
  
  // vote_count: number;
  // video: boolean;
  
}

@Injectable({
  providedIn: "root",
})

export class MovieApiService {
  apiKey = "42977a8dd424f3000c916b42cde6f38b";
  url = "https://api.themoviedb.org/3/discover/movie"
 // url = "https://api.themoviedb.org/3/genre/movie/list";
  movies: Movie[];
  constructor(private http: HttpClient) {}

  getMovies() {
    const requestUrl =
      this.getUrlWithAPIKey() + "&sort_by=release_date.desc&page=1"; // add whatever params you want from here: https://developers.themoviedb.org/3/discover/movie-discover

    console.log(requestUrl);
    this.http.get(requestUrl).subscribe(
      (response: Response) => {
        console.log(response.results);
        this.movies = response.results;
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