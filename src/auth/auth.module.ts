import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { MaterialModule } from '../app/material/material.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [
        LoginComponent, 
        RegisterComponent
    ],
    imports: [
        CommonModule, 
        FormsModule, 
        ReactiveFormsModule,
        MaterialModule, 
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase)
    ],
    providers: []
})
export class AuthModule { }
