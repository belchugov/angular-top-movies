import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Movie } from '../models/movie.interface';
import { MovieService } from '../movie.service';
import { SortMoviePipe } from '../sort-movie.pipe';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];

  constructor(
    private http: Http,
    private movieService: MovieService) { }

  getMovies(): void {
    this.movieService
    .getMovies()
    .then(movies => this.movies = movies);
  }

  private getJson(response: Response) {
    return response.json();
  }

  ngOnInit() {
    this.getMovies();
  }

}
