import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddremComponent } from './addrem/addrem.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewremComponent } from './viewrem/viewrem.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'addrem',component:AddremComponent
  },
  {
    path:'viewrem',component:ViewremComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
