import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { NewTravelcardComponent } from './components/new-travelcard/new-travelcard.component';
import { TravelcardsComponent } from './components/travelcards/travelcards.component';
import { TravelcardDetailsComponent } from './components/travelcard-details/travelcard-details.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'travelcards',
        component: TravelcardsComponent
    },
    {
        path: 'new-travelcard',
        component: NewTravelcardComponent
    },
    {
        path: 'travelcards/:id',
        component: TravelcardDetailsComponent
    },
    {
        path: 'user/:id',
        component: UserComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}