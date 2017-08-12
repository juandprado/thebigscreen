import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Movie } from '../classes/movie';

@Injectable()
export class MovieSearchService {

  private moviesUrl = 'http://api.themoviedb.org/3'; //URL to web api
  private apiKey = 'api_key=802cd9bec58e75474a66bfa717fd1106';

  constructor(private http: Http) {}

  search(term: string): Observable<any[]> {
    return this.http
      .get(`${this.moviesUrl}/search/multi?${this.apiKey}&query=${term}`)
      .map(response => response.json().results.slice(0, 20).filter(result => !result.original_name).slice(0, 8) as any[]);
  }

}
