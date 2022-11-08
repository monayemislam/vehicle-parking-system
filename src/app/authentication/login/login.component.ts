import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private authService:AuthServiceService, private route:Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  loginProcess(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result=>{
        if(result.status){
          console.log(result.data);
          localStorage.setItem('accessToken',JSON.stringify(result.data.accessToken));
          localStorage.setItem('role',JSON.stringify(result.data.user.role));
          localStorage.setItem('user',JSON.stringify(result.data.user));
          this.route.navigate(['/']);
        }
      })
    }
  }

}
