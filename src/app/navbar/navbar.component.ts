import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {EditLocationComponent} from '../edit-location/edit-location.component';
import {SearchService} from '../services/search/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private searchService: SearchService, public dialog: MatDialog) {
  }

  addLocationDialog() {
    const dialogRef = this.dialog.open(EditLocationComponent, {
      width: '450px',
      data: {name: '', city: '', locality: '', description: '', GPSLocation: '', landmark1: '', landmark2: '', uid: 'null'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

}
