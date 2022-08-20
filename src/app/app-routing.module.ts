import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RestDashboardComponent } from './rest-dashboard/rest-dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'', redirectTo:'login',pathMatch:'full'
  },
  {
  path:"signup", component:SignUpComponent
},
{
  path:'login', component:LoginComponent
},
{
  path:'resturant', component:RestDashboardComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
