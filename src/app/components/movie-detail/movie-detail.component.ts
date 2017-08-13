import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Movie } from '../../classes/movie';
import { MovieService } from '../../services/movie.service';
import 'rxjs/add/operator/switchMap';

import { Router }            from '@angular/router';


@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor (
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}
  @Input() movie: Movie;
  @Input() cast: any[];
  @Input() crew: any[];
  @Input() similar: Movie[];
  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.movieService.getMovie(+params['id']))
    .subscribe(movie => this.movie = movie);
    this.route.params
    .switchMap((params: Params) => this.movieService.getCast(+params['id']))
    .subscribe(cast => this.cast = cast.slice(0, 8));
    this.route.params
    .switchMap((params: Params) => this.movieService.getCrew(+params['id']))
    .subscribe(crew => this.crew = crew.slice(0, 8));
    this.route.params
    .switchMap((params: Params) => this.movieService.getSimilar(+params['id']))
    .subscribe(similar => this.similar = similar.slice(0, 8));
  }
  goBack(): void {
    this.location.back();
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
