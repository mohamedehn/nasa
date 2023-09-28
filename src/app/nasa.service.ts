import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NasaService {

  constructor(public http: HttpClient) { }

  getImageOfTheDay(): Observable<any>{
    return this.http.get<any>('https://api.nasa.gov/planetary/apod?api_key=Twisz2wDRJsAHoqdW3LtnWzoJA04d8atgGgOiIIU');
  }
}
