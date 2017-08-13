import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

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
  people: People[] = [];

  constructor(private movieService: MovieService, private peopleService: PeopleService,
  private router: Router) { }

  ngOnInit(): void {
    this.movieService.getMovies()
      .then(movies => this.movies = movies.slice(0, 8));
    this.peopleService.getPeople()
      .then(people => this.people = people.slice(0, 8));
  }

  gotoDetail(movie: any): void {
    if(movie.title){
      let link = ['/detail', movie.id];
      this.router.navigate(link);
    } else if (movie.name) {
        let link = ['/detail-people', movie.id];
        this.router.navigate(link);
    }
  }

}
