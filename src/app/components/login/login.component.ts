import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  // loginForm = this.fb.group({
  //   name: ['', Validators.required],
  //   password: ['', Validators.required]
  // });

  constructor(
    private loginService:LoginService,
    private fb: FormBuilder
  ) { 
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login(abc){
    
    let data;
    this.loginService.loginRequest(data).subscribe();
  }

}
