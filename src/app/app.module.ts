import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule }     from './modules/app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MoviesComponent } from './components/movies/movies.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';
import { SafePipe } from './pipes/safe.pipe';

import { MovieService } from './services/movie.service';
import { PeopleService } from './services/people.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MovieDetailComponent,
    MovieSearchComponent,
    MoviesComponent,
    PeopleDetailComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ MovieService, PeopleService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
