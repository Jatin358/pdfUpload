import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewContentService {

  url: string = 'https://ctapi.kilobytetech.com/api/user/files';

  constructor(private httpClient: HttpClient) { }

  viewContent(data: any): Observable<any>{
    return this.httpClient.post<any>(this.url, data);
  }

}
