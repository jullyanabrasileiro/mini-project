import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth-service';
import { LoginData } from '../login-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  showSpinner = false;
  showMessage = false;

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
  });

  get email() { return this.loginForm.get('email')!; }
  get password() { return this.loginForm.get('password')!; }

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) return;  
    this.login(); 
  }

  login() {
    this.showSpinner = true;
    this.showMessage = false;

    if (this.loginForm.invalid) return;

    const email = this.email.value!;
    const password = this.password.value!;
    const data: LoginData = { email: email, password: password };

    this.authService.SignIn(data.email, data.password)
      .subscribe({
        next: (answer) => {
          console.log(answer);
          this.showSpinner = false;
          this.showMessage = true;
        },
        error: (err) => {
          console.error('Login failed', err);
          this.showSpinner = false;
          this.showMessage = false; 
        }
      });
  }
}
