// src/app/movie-card/movie-card.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service'
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { GenreViewComponent } from '../genre-view/genre-view.component';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProfileViewComponent } from '../profile-view/profile-view.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
/**
 * Here we create the two collections so that we can pull the data from the api
 */
  movies: any[] = [];

  user: any;

  constructor(public fetchApiData: FetchApiDataService,
              public MatIconModule: MatIconModule,
              public dialog: MatDialog,
              public http: HttpClient,
              private Router: Router) {}

ngOnInit(): void {
  /**
   * here we initiate the two api collections so that it can be presented on the page.
   */
  this.getMovies();
  this.getUser();
}

/**
 * fetching the api data from collection movies.
 */
getMovies(): void {
  this.fetchApiData.getAllMovies().subscribe((resp: any) => {
    this.movies = resp;
    console.log(this.movies);
    return this.movies;
    });
}

/**
 * fetching the api data from the current user that is logged in to the app.
 */
getUser(): void {
  this.fetchApiData.getUser().subscribe((resp: any) => {
  this.user = resp;
  console.log('s',resp)
  return this.user
  }
  );
}

// Note to self GenreView name might be confusing but its the placeholder for all movie data.
/**
 * opens the genre modal 
 * @param name of the movie 'genre'.
 * @param desc of the movie 'description'.
 * @param imagePath of the movie 'image'
 */
openGenre(name: any, desc: any, imagePath: any){
    this.dialog.open(GenreViewComponent, {
      data: { genreName: name, genreDesc: desc, imagePath: imagePath },
      width: '580px',
      height: '580px'
    });
}

/**
 * opens the director modal
 * @param name of the movie 'director'.
 * @param bio of the movie 'bio'.
 * @param birth of the movie 'birth'.
 */
onViewDirector(name: any, bio: any, birth: any) {
  this.dialog.open(GenreViewComponent, {
    data: { directorName: name, directorBio: bio, directorBirth: birth },
    width: '580px',
    height: '580px'
  });
}

/**
 * 
 * @param title of the movie 'title'.
 * @param movDesc of the movie 'describtion'.
 */
openSynopsis(title: any, movDesc: any,) {
  this.dialog.open(GenreViewComponent, {
    data: { title: title, movDesc: movDesc },
    width: '580px',
    height: '580px'
  });
}

/**
 * 
 * @param movieID gets the movieID and put it to the users data
 */
addFavoriteMovie(movieID: any) {
  this.fetchApiData.addFavoriteMovie(movieID).subscribe(() => {});

}

/**
 * 
 * @param Username of the current user.
 * @param Password of the current user.
 * @param Email of the current user.
 * @param Birthday of the current user.
 * @param favoriteMovies of the current user.
 */
openProfile(Username: any, Password: any, Email: any, Birthday: any, favoriteMovies: any) {
    this.dialog.open(ProfileViewComponent, {
      data: { Username: Username, Password: Password, Email: Email, Birthday: Birthday, favoriteMovies: favoriteMovies},
      width: '580px',
      height: '580px'
    });
}

}