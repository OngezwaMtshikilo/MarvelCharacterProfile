import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterdataService {
  baseUrl = environment.baseWithApiUrl;
  constructor(private http: HttpClient, private router: Router) { } 

  getCharacters(): Observable<any>
  {
    try {
      return this.http.get<any>('/v1/public/characters?apikey=de56a70bee6bd6f729cbfd9575018959')
     
    } catch (error) {
      console.log("failed to retrieve characters", error)
    }
  } 
}

