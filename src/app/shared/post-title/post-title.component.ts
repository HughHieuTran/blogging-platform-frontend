import { Component, ViewEncapsulation,Input  } from '@angular/core';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { PostModel } from '../post-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PostTitleComponent {
  faComments = faComments;
  
  @Input() posts: PostModel[] = [] ;
  
  constructor(private router: Router) { 
    
  }

  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }
}
