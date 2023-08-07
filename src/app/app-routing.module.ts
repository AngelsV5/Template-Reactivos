import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InfComponent } from './inf/inf.component';
import { InfReactiveComponent } from './inf-reactive/inf-reactive.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'inf', component:InfComponent},
  {path:'inf-reactive', component:InfReactiveComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
