
import { Component, OnInit, Input, Inject } from '@angular/core';
// You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';
// This import brings in the API calls we created in 6.2
import { FetchApiDataService } from '../fetch-api-data.service';
// This import is used to display notifications back to the user

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  constructor(

    public fetchApiData: FetchApiDataService,
    public MatIconModule: MatIconModule,
    public dialogRef: MatDialogRef<ProfileViewComponent>,
    public snackBar: MatSnackBar,
    public MatsnackBar: MatSnackBarModule,
    @Inject(MAT_DIALOG_DATA)
    /**
     * here we take data and make user able to fill their information.
     */
    public data: {
      Username: string;
      Password: string;
      Email: string;
      Birthday: string,
      favoriteMovies: [string];}) 
      {}

  ngOnInit(): void {
  }


}


