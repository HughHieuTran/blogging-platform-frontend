import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { AuthGuard } from './auth/auth.guard';
import { CreateSubredditComponent } from './subreddit/create-subreddit/create-subreddit.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { ListSubredditComponent } from './subreddit/list-subreddit/list-subreddit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list-subreddits', component: ListSubredditComponent },
  { path: 'view-post/:id', component: ViewPostComponent },
  { path: 'create-post', component: CreatePostComponent, canActivate: [AuthGuard] },
  { path: 'create-subreddit', component: CreateSubredditComponent, canActivate: [AuthGuard] },

  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  declarations: [

  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
