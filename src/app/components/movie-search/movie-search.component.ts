import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { People } from '../../classes/people';
import { Movie } from '../../classes/movie';
import 'rxjs/add/operator/switchMap';

import { Router }            from '@angular/router';

import { MovieSearchService } from '../../services/movie-search.service';

@Component({
  selector: 'movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  constructor(
    private movieSearchService: MovieSearchService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) {}


  @Input() results: any[];
  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.movieSearchService.search(params['query']))
    .subscribe(results => this.results = results.slice(0, 12));
    console.log(this.results);
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
