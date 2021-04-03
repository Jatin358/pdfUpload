import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  fileToUpload: File = null;
  imageForm: FormGroup;

  constructor(private fileUploadService: FileUploadService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.imageForm = this.formBuilder.group({
      profile: ['', Validators.required]
   });
  }

  handleFileInput(files: FileList) {
    console.log(files[0]);
    this.fileToUpload = files[0];
    if(!this.fileToUpload.type.includes('/pdf')){
      alert("FIle is not a valid PDF")
    }
}
uploadFileToActivity() {
  this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
    console.log(data);
    
    }, error => {
      console.log(error);
    });
}

}
