import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTitleComponent } from './post-title.component';

describe('PostTitleComponent', () => {
  let component: PostTitleComponent;
  let fixture: ComponentFixture<PostTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostTitleComponent]
    });
    fixture = TestBed.createComponent(PostTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
