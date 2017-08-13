import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { Movie } from '../../classes/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'my-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {

  constructor(private movieService: MovieService, private router: Router) { };
   movies: Movie[];
   movieTheaters: Movie[]= []
   movieTop: Movie[]= [];
   getMovies(): void {
     this.movieService.getMovies().then(movies => this.movies = movies.slice(0, 8));
     this.movieService.getMoviesTheaters()
       .then(movieTheaters => this.movieTheaters = movieTheaters.slice(0, 8));
     this.movieService.getMoviesTop()
       .then(movieTop => this.movieTop = movieTop.slice(0, 8));
   }
   ngOnInit(): void {
     this.getMovies();
   }
   gotoDetail(movie: any): void {
       let link = ['/detail', movie.id];
       this.router.navigate(link);
   }

}
