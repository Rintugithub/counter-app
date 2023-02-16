import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CouterComponent } from './couter/couter.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:CouterComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"user",component:UserComponent},
  {path:"dropdown",component:DropdownComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
