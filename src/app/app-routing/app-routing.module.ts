import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { SignupComponent } from "../signup/signup.component";

const routes: Routes = [

  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    })
  ]
})
export class AppRoutingModule { }
