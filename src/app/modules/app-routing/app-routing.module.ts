import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes }   from '@angular/router';

import { MoviesComponent} from '../../components/movies/movies.component';
import { DashboardComponent} from '../../components/dashboard/dashboard.component';
import { MovieDetailComponent } from '../../components/movie-detail/movie-detail.component';
import { PeopleDetailComponent } from '../../components/people-detail/people-detail.component';
import { MovieSearchComponent} from '../../components/movie-search/movie-search.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: 'movies',     component: MoviesComponent },
  { path: 'detail-people/:id', component: PeopleDetailComponent },
  { path: 'movie-search/:query', component: MovieSearchComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
