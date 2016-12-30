import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../models/movie.interface';

@Component({
  selector: '[app-movie-short]',
  templateUrl: './movie-short.component.html',
  styleUrls: ['./movie-short.component.css']
})
export class MovieShortComponent implements OnInit {
  @Input() movie: Movie;

  get title(): string {
    return this.movie.Title;
  }

  get poster(): string {
    return this.movie.Poster;
  }

  get year(): number {
    return this.movie.Year;
  }

  get imdbRating(): number {
    return this.movie.imdbRating;
  }

  constructor() { }

  ngOnInit() {
  }

}
