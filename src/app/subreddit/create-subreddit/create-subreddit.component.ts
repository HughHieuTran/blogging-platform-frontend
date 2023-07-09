import { Component } from '@angular/core';
import { SubredditModel } from '../subreddit-response';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubredditService } from '../subreddit.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-create-subreddit',
  templateUrl: './create-subreddit.component.html',
  styleUrls: ['./create-subreddit.component.css']
})
export class CreateSubredditComponent {
  createSubredditForm: FormGroup;
  subredditModel: SubredditModel;
  title = new FormControl('');
  description = new FormControl('');

  constructor(private router: Router, private subredditService: SubredditService) {
    this.createSubredditForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.subredditModel = {
      name: '',
      description: ''
    }
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createSubreddit() {
    if (this.createSubreddit == null) return;
    this.subredditModel.name = this.createSubredditForm.value.name;
    this.subredditModel.description = this.createSubredditForm.value.description;
    this.subredditService.createSubreddit(this.subredditModel).subscribe(
      data => {
        this.router.navigateByUrl('/list-subreddits');
      }, error => {
        throwError(() => error);
      })
  }
}
