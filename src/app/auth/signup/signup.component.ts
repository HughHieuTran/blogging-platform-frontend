import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignupRequestPayload } from './singup-request.payload';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent {

  signupRequestPayload: SignupRequestPayload = {
    username: '',
    email: '',
    password: ''
  };

  signupForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private router: Router,
    private toastr: ToastrService) {
  }

  signup() {
    if (!this.signupForm.valid) return;
    this.signupRequestPayload.email = this.signupForm.value.email;
    this.signupRequestPayload.username = this.signupForm.value.username;
    this.signupRequestPayload.password = this.signupForm.value.password;

    console.log(this.signupRequestPayload);

    this.authService.signup(this.signupRequestPayload)
      .subscribe({
        next: (data) => {
          this.router.navigate(['/login'],
            { queryParams: { registered: 'true' } })
        },
        error: (error) => {
          console.log(error);
          this.toastr.error('Registration Failed! Please try again');
        }
      })
   
  }

}
