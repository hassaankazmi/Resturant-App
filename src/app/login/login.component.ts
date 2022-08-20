import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login!:FormGroup;
  constructor(private formBuilder:FormBuilder, private _http:HttpClient, private router:Router) { }
 
  ngOnInit(): void {
    this.login=this.formBuilder.group({
      email:[''],
      password:[''],
    })

  }
  loginForm(){
  this._http.get<any>("http://localhost:3000/signup/").subscribe(res=>{
const user=res.find((a: any)=>{
return a.email===this.login.value.email && a.password===this.login.value.password
})

if(user){
  alert("login successfully");
  this.router.navigate(['resturant']);
}
  })
  }
}

