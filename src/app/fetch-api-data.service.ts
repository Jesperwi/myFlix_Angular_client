import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { config, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { stringify } from '@angular/compiler/src/util';

const apiUrl = 'https://myflixjw.herokuapp.com/';
@Injectable({
  providedIn: 'root'
})

export class FetchApiDataService {
  http: any;
  // Inject the HttpClient module to the constructor params
 // This will provide HttpClient to the entire class, making it available via this.http
  // constructor(private http: HttpClient) {
  // }
  constructor(http: HttpClient) {
    this.http = http;
  }
 // Making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users', userDetails).pipe(
    catchError(this.handleError)
    );
  }

  userLogin(userDetails: any) {
    
    return this.http.post(apiUrl + 'login', userDetails, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer '})})
        .pipe(map(function (user: any) {
            // login successful if there's a jwt token in the response
            if (user) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('token', (user.token));
              localStorage.setItem('username', (user.user.Username));
            }

            return user;
          }));
}

private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
}
  
getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
    catchError(this.handleError)
  );
}

getUser() {
  let token = localStorage.getItem('token');
  let user =  localStorage.getItem('username');
  return this.http.get(`http://myflixjw.herokuapp.com/users/${user}`, {headers: new HttpHeaders(
    {
      Authorization: 'Bearer ' + token,
    })}).pipe(
    map(this.extractResponseData),
  catchError(this.handleError)
    )
  }

addFavoriteMovie(movieID: any) {
  let token = localStorage.getItem('token');
  let user = localStorage.getItem('username');
  return this.http.post(
      `https://myflixjw.herokuapp.com/users/${user}/movies/${movieID}`, {headers: new HttpHeaders(
        {
          Authorization: 'Bearer ' + token,
        })}).pipe(
        map(this.extractResponseData),
      catchError(this.handleError)
        )
}

// Non-typed response extraction
  private extractResponseData(res: Response): any {
    const body = res;
    return body || { };
  }
}

