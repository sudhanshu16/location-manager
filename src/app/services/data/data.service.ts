import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

interface Location {
  name: string;
  city: string;
  locality: string;
  description: string;
  google_map_location: string;
  landmark1: string;
  landmark2: string;
  uid: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  locations: Observable<Location[]>;

  locationsLoaded = false;

  constructor(private afs: AngularFirestore) {

  }

  loadLocations() {
    if (!this.locationsLoaded) {
      this.locations = this.afs.collection<Location>('locations').snapshotChanges().pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Location;
          data.uid = a.payload.doc.id;
          return data;
        });
      }));
      this.locationsLoaded = true;
    }
  }

  fetchAllLocations() {
    return this.afs.collection<Location>('locations').snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Location;
        data.uid = a.payload.doc.id;
        return data;
      });
    }));
  }

  addLocation(location: Location) {
    this.loadLocations();
    return this.afs.collection<Location>('locations').add(location);
  }

  updateLocation(location: Location) {
    this.loadLocations();
    return this.afs.doc<Location>('locations/' + location.uid).update(location);
  }

  deleteLocation(id: string) {
    return this.afs.collection<Location>('locations').doc<Location>(id).delete();
  }
}
