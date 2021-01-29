# MyFlixAngularClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# myFlix_Angular_client

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documentation Angular myflix</title>
</head>
<body>
<header>
  <h1>Notes the Angular myFlix app</h1>
  <p>Create a movie library app</p>
</header>

<div><ul>
  <li>Make FetchAPI's</li>
  <li>Make Welcome screen</li>
  <li>Login/Register function</li>
  <li>Movie main view</li>
  <li>Movie informations</li>
  <li>Profile info</li>
</div></ul>

<table>
  <td>Make FetchAPI's</td>
  <td>get movies collectio</td>
  <td>get users collection</td>
  <td>post user login</td>
  <td>post user registration</td>
  <td>put favorite movie</td>
<tr>
  <td>Login</td>
  <td>Login Modal</td>
  <td>User info</td>
  <td>Enter Site</td>
</tr>
  <td>Register</td>
  <td>Register modal</td>
  <td>Register info post</td>
  <td>User able to log in</td>
<tr>
  <td>Movie view</td>
  <td>GET movies from API</td>
  <td>See all movies</td>
  <td>Movie infos</td>
</tr>   
<tr>
  <td>Movie modal</td>
  <td>Movie infos exist</td>
  <td>Genre</td>
  <td>About</td>
  <td>Director</td>
  <td>favorite</td>
</tr>
<tr>
  <td>Update users</td>
  <td>users/:Username</td>
  <td>Put</td>
  <td>Json</td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td>Movie favorite</td>
  <td>/users/:Username/Movies/:MovieID</td>
  <td>Post</td>
  <td>/users/olivia/movies/Logan ID</td>
  <td>JSON</td>
  <td>{
      "FavoriteMovies": [],
      "_id": "5fa92f978c625f34040d0ec8",
      "Username": "Olivia",
      "Password": "olivi123",
      "Email": "oliv@gmail.com",
      "Birthday": "1996-01-01T00:00:00.000Z",
      "__v": 0
  }</td>
</tr>
<tr>
  <td>ProfileView</td>
  <td>/users/:Username</td>
  <td>check info</td>
  <td>Recieved</td>
  <td>/users/jin</td>
</tr>
<tr>
  <td>Add user</td>
  <td>/users/:Username</td>
  <td>Push</td>
  <td>None</td>
  <td>/users/jin</td>
</tr>
</table>

</body>
</html>
