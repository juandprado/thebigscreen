import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { People } from '../classes/people';
import { Movie } from '../classes/movie'

@Injectable()
export class PeopleService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private peopleUrl = 'http://gentle-spire-70902.herokuapp.com'; //URL to web api
  private apiKey = 'api_key=802cd9bec58e75474a66bfa717fd1106';

  constructor(private http: Http) { }

  getPeople(): Promise<People[]> {
    return this.http.get(this.peopleUrl+'/people-trending')
      .toPromise()
      .then(response => response.json().results as People[])
      .catch(this.handleError);
  };

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); //for demo purposes only
    return Promise.reject(error.message || error);
  }

  getPerson(id: number): Promise<People> {
    const url = `${this.peopleUrl}/people/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as People)
      .catch(this.handleError)
  }

  getParticipationCast(id: number): Promise<Movie[]> {
    const url = `${this.peopleUrl}/people-cast/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().cast as Movie[])
      .catch(this.handleError)
  }

  getParticipationCrew(id: number): Promise<Movie[]> {
    const url = `${this.peopleUrl}/people-cast/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().crew as Movie[])
      .catch(this.handleError)
  }

}
