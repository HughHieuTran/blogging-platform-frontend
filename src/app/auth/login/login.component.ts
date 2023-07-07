import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginRequestPayload } from './login-request.payload';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginRequestPayload: LoginRequestPayload = {
    username: '',
    password: ''
  };;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  registerSuccessMessage: string = "";
  isError: boolean = false;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute,
    private router: Router, private toastr: ToastrService) {

      this.activatedRoute.queryParams
      .subscribe(params => {
        if (params['registered'] !== undefined && params['registered'] === 'true') {
          this.toastr.success('Signup Successful');
          this.registerSuccessMessage = 'Please Check your inbox for activation email '
            + 'activate your account before you Login!';
        }
      });
  }




  login() {
    if (!this.loginForm.valid) { return };

    this.loginRequestPayload.username = this.loginForm.get('username')?.value;
    this.loginRequestPayload.password = this.loginForm.get('password')?.value;

    this.authService.login(this.loginRequestPayload)
      .subscribe({
        next: () => {
          this.isError = false;
          this.router.navigateByUrl('');
          this.toastr.success('Login Successful');
        },
        error: (error) => {
          this.isError = true;
          throwError(error);
        }
      })


  }

}
