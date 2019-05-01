import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {NavbarComponent} from './navbar/navbar.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import {EditLocationComponent} from './edit-location/edit-location.component';
import {FormsModule} from '@angular/forms';
import {LocationGridComponent} from './location-grid/location-grid.component';
import {SearchPipe} from './services/search/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EditLocationComponent,
    LocationGridComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatTooltipModule,
    MatDialogModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ],
  providers: [AngularFirestore, NavbarComponent],
  bootstrap: [AppComponent],
  entryComponents: [EditLocationComponent]
})
export class AppModule {
}
