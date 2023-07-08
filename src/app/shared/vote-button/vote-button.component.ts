import { Component, Input } from '@angular/core';
import { PostModel } from '../post-model';
import { VotePayload } from './vote-payload';
import { VoteType } from './vote-type';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { ToastrService } from 'ngx-toastr';
import { PostService } from '../post.service';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css']
})
export class VoteButtonComponent {
  @Input() post: PostModel | undefined;

  votePayload: VotePayload = {
    voteType: undefined,
    postId: undefined
  };

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  // upvoteColor: string ;
  // downvoteColor: string ;
  // isLoggedIn: boolean ;

  constructor(
    private authService: AuthService,
    private postService: PostService, private toastr: ToastrService) {
  }



  private updateVoteDetails() {
    if (!this.post) return;

    this.postService.getPost(this.post.id).subscribe(post => {
      this.post = post;
    });

  }
}
