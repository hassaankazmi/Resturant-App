import { HttpClient } from '@angular/common/http';
import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  signup!:FormGroup;

  constructor(private formBuilder:FormBuilder,  private router:Router, private  _http:HttpClient) { }

  ngOnInit(): void {
this.signup=this.formBuilder.group({
  name:[''],
  password:[''],
  email:[''],
  mobile:[''],
})}
signUp(){
  this._http.post<any>("http://localhost:3000/signup/", this.signup.value).subscribe(res =>{
    alert("Rejister Successfully");
    this.signup.reset();
    this.router.navigate(['/login']);
  })

  }

}





