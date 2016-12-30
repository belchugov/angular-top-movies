import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './movie.service';
import { MovieShortComponent } from './movie-short/movie-short.component';
import { MovieSortComponent } from './movie-sort/movie-sort.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { SortMoviePipe } from './sort-movie.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieShortComponent,
    MovieSortComponent,
    MovieSearchComponent,
    SortMoviePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
