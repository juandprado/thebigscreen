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
   selectedMovie: Movie;
   onSelect(movie: Movie): void {
     this.selectedMovie = movie;
   };
   getMovies(): void {
     this.movieService.getMovies().then(movies => this.movies = movies);
   }
   ngOnInit(): void {
     this.getMovies();
   }
   gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedMovie.id]);
  }

}
