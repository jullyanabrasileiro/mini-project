import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { User } from "./user";
import { Router } from "@angular/router";
@Injectable({
    providedIn: 'root'
})

export class AuthService {
    login = false;
    txtNavBarLoginText = "Login"
    userData: any; 
    constructor(public afAuth: AngularFireAuth, public router: Router) {

        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                let item = localStorage.getItem('user');
                console.log(user.toJSON());
                if (user) {
                    this.login = true;
                    this.router.navigate(['home']);
                }
            }
            else {
                localStorage.setItem('user', "");
                this.login = false;
                this.router.navigate(['login']);
            }
        });
    }
}

