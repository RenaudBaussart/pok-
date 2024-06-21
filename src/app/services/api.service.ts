import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://tyradex.vercel.app/api/v1/gen/1';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
