import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  errorMessage: boolean = false;

  constructor(
    private loginService:LoginService,
    private fb: FormBuilder,
    private router: Router
  ) { 
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login(){
    let data = {};
    
    let userName = this.loginForm.controls['userName'].value;
    let password = this.loginForm.controls['password'].value; 
    data = { 'email': userName, 'password': password};

    this.loginService.loginRequest(data).subscribe((login) => {
      if(login && login.message == 'Login Successfull'){
        let appToken = login.data.token;
        let id = login.data._id;
        console.log(appToken);
        localStorage.setItem('appToken', appToken);
        localStorage.setItem('id', id);
        this.router.navigate(['/','dashboard']);
      }else if(login.message == 'Login Failed'){
        setTimeout(()=>{              
          this.errorMessage = true;
     }, 3000);
      }
    });
  }

}
