import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data/data.service';
import {EditLocationComponent} from '../edit-location/edit-location.component';
import {MatDialog, MatSnackBar} from '@angular/material';
import {AuthService} from '../services/auth/auth.service';
import {SearchService} from '../services/search/search.service';

@Component({
  selector: 'app-location-grid',
  templateUrl: './location-grid.component.html',
  styleUrls: ['./location-grid.component.scss']
})
export class LocationGridComponent implements OnInit {

  locations = [];
  loaded = false;

  constructor(
    public dataService: DataService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private searchService: SearchService) {
  }

  ngOnInit() {
    this.dataService.fetchAllLocations().subscribe(posts => {
      this.locations = posts;
      this.loaded = true;
    });
  }

  deleteLocation(id) {
    if (confirm('Do you really want to delete?')) {
      this.dataService.deleteLocation(id).then(() => {
        this.snackBar.open('Successfully deleted', '', {duration: 3000});
      }).catch(() => {
        this.snackBar.open('Unexpected error occurred. Please try again!', '', {duration: 3000});
      });
    }
  }

  editLocation(l) {
    const dialogRef = this.dialog.open(EditLocationComponent, {
      width: '450px',
      data: l
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
