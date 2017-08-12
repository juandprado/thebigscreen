import { Component, OnInit } from '@angular/core';

import { Movie } from '../../classes/movie'
import { MovieService } from '../../services/movie.service'

import {People} from '../../classes/people'
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies: Movie[] = [];
  movieTheaters: Movie[]= []
  movieTop: Movie[]= []
  people: People[] = [];

  constructor(private movieService: MovieService, private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.movieService.getMovies()
      .then(movies => this.movies = movies.slice(0, 7));
    this.movieService.getMoviesTheaters()
      .then(movieTheaters => this.movieTheaters = movieTheaters.slice(0, 4));
    this.movieService.getMoviesTop()
      .then(movieTop => this.movieTop = movieTop.slice(0, 4));
    this.peopleService.getPeople()
      .then(people => this.people = people.slice(0, 4));
  }

}
