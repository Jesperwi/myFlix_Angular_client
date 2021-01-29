
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
  selector: 'app-genre-view',
  templateUrl: './genre-view.component.html',
  styleUrls: ['./genre-view.component.scss']
})
export class GenreViewComponent {

  constructor(public fetchApiData: FetchApiDataService,
              public MatIconModule: MatIconModule,
              public dialogRef: MatDialogRef<GenreViewComponent>,
              public snackBar: MatSnackBar,
              public MatsnackBar: MatSnackBarModule,
              @Inject(MAT_DIALOG_DATA)
              public data: {
                title: string;
                genreName: string;
                genreDesc: string;
                directorName: string;
                directorBio: string;
                directorBirth: string;
                movDesc: string;
                imagePath: string;}) 
                {}

ngOnInit(): void {
}

}



