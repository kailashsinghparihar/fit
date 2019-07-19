import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AskComponent } from './ask/ask.component';
import { StoreComponent } from './store/store.component';
import { LecturesComponent } from './lectures/lectures.component';
import { SigninComponent } from './signin/signin.component';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';

import { ViewComponent } from './view/view.component';

const routes: Routes = [
 {path:"",component:HomeComponent}, 
{path:"home",component:HomeComponent},
{path:"ask",component:AskComponent},
{path:"store",component:StoreComponent},
{path:"lectures",component:LecturesComponent},
{path:"signin",component:SigninComponent},
{path:"onewaybinding",component:OnewaybindingComponent},

{path:"view",component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
