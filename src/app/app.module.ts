import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { SignupComponent } from './components/signup/signup.component';
import { TravelcardService } from './services/travelcard.service';

//routes
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { NewTravelcardComponent } from './components/new-travelcard/new-travelcard.component';
import { TravelcardsComponent } from './components/travelcards/travelcards.component';
import { TravelcardDetailsComponent } from './components/travelcard-details/travelcard-details.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NewTravelcardComponent,
    TravelcardsComponent,
    TravelcardDetailsComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [AuthService, TravelcardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
