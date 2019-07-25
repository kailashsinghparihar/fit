import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AskComponent } from './ask/ask.component';
import { StoreComponent } from './store/store.component';
import { LecturesComponent } from './lectures/lectures.component';
import { SigninComponent } from './signin/signin.component';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

import{FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ImportanceComponent } from './importance/importance.component';
import { UrtrainerComponent } from './urtrainer/urtrainer.component';
import { DietComponent } from './diet/diet.component';
import { WorkoutComponent } from './workout/workout.component';
import { DeskComponent } from './desk/desk.component';
import { SignupComponent } from './signup/signup.component';
import { SigndataComponent } from './signdata/signdata.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AskComponent,
    StoreComponent,
    LecturesComponent,
    SigninComponent,
    OnewaybindingComponent,
    TwowaybindingComponent,
    
    ViewComponent,
    ContactusComponent,
    ImportanceComponent,
    UrtrainerComponent,
    DietComponent,
    WorkoutComponent,
    DeskComponent,
    SignupComponent,
    SigndataComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
