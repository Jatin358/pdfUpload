import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient: HttpClient) { }

  postFile(fileToUpload: File): Observable<object> {

    let id = localStorage.getItem('id') ? localStorage.getItem('id') : '';
    const endpoint = 'https://ctapi.kilobytetech.com/api/folder/5e2c5b5d5323c70ae924a815/addPdf';
    const formData: FormData = new FormData();
    formData.append('name', fileToUpload.name);
    formData.append('file', fileToUpload);
    console.log(formData);
    let token = localStorage.getItem('appToken') ? localStorage.getItem('appToken') : ''
    return this.httpClient.post(endpoint, formData, { headers: {
      
      Authorization:  'Bearer '+token
    } })
    
}


}
