
import { Component, OnInit, Input } from '@angular/core';
// import { Routes } from '@angular/router';
import { Router } from '@angular/router';
// You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';
// This import brings in the API calls we created in 6.2
import { FetchApiDataService } from '../fetch-api-data.service';
// This import is used to display notifications back to the user
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})

export class UserLoginComponent implements OnInit {

  @Input() userData = { Username: '', Password: '' };
  snackbar: any;
  router: any;

constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginComponent>,
    public snackBar: MatSnackBar,
    public MatsnackBar: MatSnackBarModule,
    private Router: Router) { }

    ngOnInit(): void {
}

/**
 * fetching the data from login and then we navigate with routher to movies
 */
userLogin(): void {
  this.fetchApiData.userLogin(this.userData).subscribe(() => {
      console.log(this.userData);
      this.dialogRef.close();
      this.Router.navigate(['movies']);
    });
  }
} 
