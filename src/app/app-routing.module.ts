import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AskComponent } from './ask/ask.component';
import { StoreComponent } from './store/store.component';
import { LecturesComponent } from './lectures/lectures.component';
import { SigninComponent } from './signin/signin.component';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { ImportanceComponent } from './importance/importance.component';
import { UrtrainerComponent } from './urtrainer/urtrainer.component';
import { DietComponent } from './diet/diet.component';
import { WorkoutComponent } from './workout/workout.component';
import { ViewComponent } from './view/view.component';
import { DeskComponent } from './desk/desk.component';
import { SignupComponent } from './signup/signup.component';
import { SigndataComponent } from './signdata/signdata.component';



const routes: Routes = [
 {path:"",component:HomeComponent}, 
{path:"home",component:HomeComponent},
{path:"ask",component:AskComponent},
{path:"store",component:StoreComponent},
{path:"lectures",component:LecturesComponent},
{path:"signin",component:SigninComponent},
{path:"onewaybinding",component:OnewaybindingComponent},
{path:"importance",component:ImportanceComponent},
{path:"urtrainer",component:UrtrainerComponent},
{path:"diet",component:DietComponent},
{path:"workout",component:WorkoutComponent},
{path:"view",component:ViewComponent},
{path:"desk",component:DeskComponent},
{path:"signup",component:SignupComponent},
{path:"signdata",component:SigndataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
