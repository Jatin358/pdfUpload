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
    const endpoint = 'https://ctapi.kilobytetech.com/api/folder/:'+ id +'/addPdf';
    const formData: FormData = new FormData();
    formData.append('name', fileToUpload.name);
    formData.append('file', fileToUpload);
    console.log(formData);
    let token = localStorage.getItem('appToken') ? localStorage.getItem('appToken') : ''
    return this.httpClient.post(endpoint, formData, { headers: {
      
      auth: token
    } })
      // .map(() => { return true; })
      // .catch(console.log('Error'));
}


}
