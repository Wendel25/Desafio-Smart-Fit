import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  searchLocalizations(): Observable<any> {
    const url = `https://test-frontend-developer.s3.amazonaws.com/data/locations.json`;
    return ajax.get(url);
  }
}
