import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Movie } from '../classes/movie';

@Injectable()
export class MovieSearchService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private moviesUrl = 'http://gentle-spire-70902.herokuapp.com'; //URL to web api
  private apiKey = 'api_key=802cd9bec58e75474a66bfa717fd1106';

  constructor(private http: Http) {}

  search(term: string): Promise<any[]> {
    const url = `${this.moviesUrl}/movies-search/${term}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().results.slice(0, 20).filter(result => !result.original_name).slice(0, 12) as any[])
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }
}
