import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth, AngularFireAuthModule }
    from "@angular/fire/compat/auth";
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { MaterialModule } from '../app/material/material.module';

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
        AngularFireModule
            .initializeApp(environment.firebase), 
    ],
    exports: [],
    providers: [],
})
export class AuthModule { }