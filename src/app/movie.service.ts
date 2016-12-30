import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

import { Movie } from './models/movie.interface';

@Injectable()
export class MovieService {
  private moviesUrl = '../app/data/movies.json';

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  constructor(private http: Http) { }

  getMovies(): Promise<any> {
    return this.http.get(this.moviesUrl)
      .toPromise()
      .then(response => response.json() as Movie[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
