import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth-service';
import { LoginData } from '../login-data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {  
  submitted = false;
  showSpinner = false;
  showMessage = false;

  registerForm = new FormGroup({ 
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
  });

  get email() { return this.registerForm.get('email')!.value; }
  get password() { return this.registerForm.get('password')!.value; }

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.invalid) return;
    this.register();
  }

  register() {
    this.showSpinner = true;
    this.showMessage = false;

    if (this.registerForm.invalid) return;

    let email = this.email;
    let password = this.password;

    if (!email || !password) {
      console.error('Email and password are required.');
      this.showSpinner = false;
      return;
    }

    let data: LoginData = { email: email, password: password };

    this.authService.SignUp(data.email, data.password)
      .subscribe(answer => {
        console.log(answer);
        this.showSpinner = false;
        this.showMessage = true;
      });
  }
}
