import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Movie } from '../classes/movie';

@Injectable()
export class MovieService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private moviesUrl = 'http://api.themoviedb.org/3'; //URL to web api
  private apiKey = 'api_key=802cd9bec58e75474a66bfa717fd1106';

  constructor(private http: Http) { }

  getMovies(): Promise<Movie[]> {
    return this.http.get(this.moviesUrl+'/discover/movie?'+this.apiKey)
      .toPromise()
      .then(response => response.json().results as Movie[])
      .catch(this.handleError);
  };

  getMoviesTheaters(): Promise<Movie[]> {
    return this.http.get(this.moviesUrl+'/movie/now_playing?'+this.apiKey)
      .toPromise()
      .then(response => response.json().results as Movie[])
      .catch(this.handleError);
  };

  getMoviesTop(): Promise<Movie[]> {
    return this.http.get(this.moviesUrl+'/movie/top_rated?'+this.apiKey)
      .toPromise()
      .then(response => response.json().results as Movie[])
      .catch(this.handleError);
  };

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); //for demo purposes only
    return Promise.reject(error.message || error);
  }

  getMovie(id: number): Promise<Movie> {
    const url = `${this.moviesUrl}/movie/${id}?${this.apiKey}&append_to_response=videos`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Movie)
      .catch(this.handleError)
  }

  getSimilar(id: number): Promise<Movie[]> {
    const url = `${this.moviesUrl}/movie/${id}/similar?${this.apiKey}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().results as Movie[])
      .catch(this.handleError)
  }

  getCast(id: number): Promise<any[]> {
    const url = `${this.moviesUrl}/movie/${id}/casts?${this.apiKey}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().cast)
      .catch(this.handleError)
  }

  getCrew(id: number): Promise<any[]> {
    const url = `${this.moviesUrl}/movie/${id}/casts?${this.apiKey}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().crew)
      .catch(this.handleError)
  }

}
