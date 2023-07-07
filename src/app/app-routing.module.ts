import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path: 'sign-up', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations:[
    
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
