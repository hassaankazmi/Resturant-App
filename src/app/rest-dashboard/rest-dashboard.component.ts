import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResturantServiceService } from '../services/resturant-service.service';
import { resturentData } from './rest-obj.model';
@Component({
  selector: 'app-rest-dashboard',
  templateUrl: './rest-dashboard.component.html',
  styleUrls: ['./rest-dashboard.component.css']
})
export class RestDashboardComponent implements OnInit {

  formValue!: FormGroup;
  resturant1obj: resturentData = new resturentData;
  constructor(private formbuilder: FormBuilder, private api: ResturantServiceService) { }
  resturantData: any;
  shoUpdate!: boolean;
  showAdd!: boolean;

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: [''],

    })
    this.allResturantData()
  }
  addResturant() {
    this.resturant1obj.name = this.formValue.value.name;


    this.resturant1obj.email = this.formValue.value.email;
    this.resturant1obj.mobile = this.formValue.value.mobile;

    this.resturant1obj.address = this.formValue.value.address;
    this.resturant1obj.services = this.formValue.value.services;

    this.api.postResturant(this.resturant1obj).subscribe(res => {

      console.log(res);
      alert("successfully addes");
      this.formValue.reset();
      this.allResturantData();
    },
      err => {
        alert("Error");

      })
  }
  allResturantData() {
    this.api.getResturant().subscribe(res => {
      this.resturantData = res;
    })
  }

  addDetail() {
    this.formValue.reset();
    this.showAdd = true;
    this.shoUpdate = false;
  }
  deleteData(data: any) {
    this.api.deleteResturant(data.id).subscribe(res => {
      this.allResturantData();
    })

  }

  editData(data: any) {
    this.shoUpdate = true;
    this.showAdd = false;
    this.resturant1obj.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);
  }

  onUpdate() {
    this.resturant1obj.name = this.formValue.value.name;
    this.resturant1obj.email = this.formValue.value.email;
    this.resturant1obj.mobile = this.formValue.value.mobile;
    this.resturant1obj.address = this.formValue.value.address;
    this.resturant1obj.services = this.formValue.value.services;

    this.api.updateResturant(this.resturant1obj, this.resturant1obj.id).subscribe(res => {
      alert("passed")
      this.allResturantData();
      this.formValue.reset();
    })
  }
}
