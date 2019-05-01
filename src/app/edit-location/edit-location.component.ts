import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {AuthService} from '../services/auth/auth.service';
import {DataService} from '../services/data/data.service';

export interface Location {
  name: string;
  city: string;
  locality: string;
  description: string;
  google_map_location: string;
  landmark1: string;
  landmark2: string;
  uid: string;
}

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.scss']
})
export class EditLocationComponent {

  working = false;
  data: Location;

  constructor(
    public dialogRef: MatDialogRef<EditLocationComponent>,
    @Inject(MAT_DIALOG_DATA) public dataSource: Location,
    public authService: AuthService,
    public dataService: DataService,
    private snackBar: MatSnackBar) {
    this.data = Object.assign({}, this.dataSource);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.working = true;
    if (this.data.uid === 'null') {
      this.dataService.addLocation(this.data).then(() => {
        this.snackBar.open('Successfully added', '', {duration: 3000});
        this.dialogRef.close();
      }).catch(() => {
        this.snackBar.open('Unexpected error occurred. Please try again!', '', {duration: 3000});
      }).finally(() => {
        this.working = false;
      });
    } else {
      this.dataService.updateLocation(this.data).then(() => {
        this.snackBar.open('Successfully updated', '', {duration: 3000});
        this.dialogRef.close();
      }).catch(() => {
        this.snackBar.open('Unexpected error occurred. Please try again!', '', {duration: 3000});
      }).finally(() => {
        this.working = false;
      });
    }
  }

}
