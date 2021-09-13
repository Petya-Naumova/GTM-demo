import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "../app.component";

const routes: Routes = [

  {
    path: 'signup',
    component: AppComponent,
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
