import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = 'https://ctapi.kilobytetech.com/api/user/login';

  constructor(private httpClient: HttpClient) { }

  loginRequest(data: any): Observable<any>{
    return this.httpClient.post<any>(this.url, data);
  }
}
