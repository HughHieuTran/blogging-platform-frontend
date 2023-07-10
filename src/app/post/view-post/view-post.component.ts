import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { CommentPayload } from 'src/app/comment/comment.payload';
import { CommentService } from 'src/app/comment/comment.service';
import { PostModel } from 'src/app/shared/post-model';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent {

  postId: number;
  post: PostModel | undefined;
  commentForm: FormGroup = new FormGroup({
    text: new FormControl('', Validators.required)
  });;
  commentPayload: CommentPayload;
  comments: CommentPayload[] = [];

  constructor(private postService: PostService, private activateRoute: ActivatedRoute,
    private commentService: CommentService, private router: Router,) {

    this.postId = this.activateRoute.snapshot.params['id'];

    this.commentPayload = {
      text: '',
      postId: this.postId
    };

  }

  ngOnInit(): void {
    this.getPostById();
    this.getCommentsForPost();
  }

  postComment() {
    this.commentPayload.text = this.commentForm.value.text;
    this.commentService.postComment(this.commentPayload).subscribe(data => {
      this.commentForm.value.text.setValue('');
      this.getCommentsForPost();
    }, error => {
      throwError(() => error);
    })
  }

  private getPostById() {
    this.postService.getPost(this.postId).subscribe(data => {
      this.post = data;
    }, error => {
      throwError(() => error);
    });
  }

  private getCommentsForPost() {
    this.commentService.getAllCommentsForPost(this.postId).subscribe(data => {
      this.comments = data;
    }, error => {
      throwError(() => error);
    });
  }
}
