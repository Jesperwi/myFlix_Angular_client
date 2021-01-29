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

  movies: any[] = [];

  user: any;

  constructor(public fetchApiData: FetchApiDataService,
              public MatIconModule: MatIconModule,
              public dialog: MatDialog,
              public http: HttpClient,
              private Router: Router) {}

ngOnInit(): void {
  this.getMovies();
  this.getUser();
}

getMovies(): void {
  this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
}

getUser(): void {
  this.fetchApiData.getUser().subscribe((resp: any) => {
    this.user = resp;
    console.log('s',resp)
    return this.user
  }
  );
}

openGenre(name: any, desc: any, imagePath: any){
    this.dialog.open(GenreViewComponent, {
      data: { genreName: name, genreDesc: desc, imagePath: imagePath },
      width: '580px',
      height: '580px'
    });
}

onViewDirector(name: any, bio: any, birth: any) {
  this.dialog.open(GenreViewComponent, {
    data: { directorName: name, directorBio: bio, directorBirth: birth },
    width: '580px',
    height: '580px'
  });
}

openSynopsis(title: any, movDesc: any,) {
  this.dialog.open(GenreViewComponent, {
    data: { title: title, movDesc: movDesc },
    width: '580px',
    height: '580px'
  });
}

addFavoriteMovie(movieID: any) {
  this.fetchApiData.addFavoriteMovie(movieID).subscribe(() => {});

}


openProfile(Username: any, Password: any, Email: any, Birthday: any, favoriteMovies: any) {
    this.dialog.open(ProfileViewComponent, {
      data: { Username: Username, Password: Password, Email: Email, Birthday: Birthday, favoriteMovies: favoriteMovies},
      width: '580px',
      height: '580px'
    });
}

}