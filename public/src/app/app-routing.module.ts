import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {StartComponent} from './start/start.component';
import {HomeComponent} from './home/home.component';
import {SpymasterComponent} from './spymaster/spymaster.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:"start" },
  {path: 'home', component: HomeComponent},
  {path: 'spymaster', component: SpymasterComponent},
  { path:'start', component: StartComponent},

  { path: '**', component: StartComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
