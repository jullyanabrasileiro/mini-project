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
    txtNavBarLoginText = "Login";
    userData: any; // Save logged in user data

    constructor(public afAuth: AngularFireAuth, public router: Router) {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                console.log(user.toJSON());
                this.login = true;
                this.router.navigate(['home']);
            } else {
                localStorage.setItem('user', "");
                this.login = false;
                this.router.navigate(['login']);
            }
        });
    }

    SignUp(email: string, password: string): Observable<any> {
        this.login = true;
        return of(this.afAuth.createUserWithEmailAndPassword(email, password));
    }

    SignIn(email: string, password: string): Observable<any> {
        return of(this.afAuth.signInWithEmailAndPassword(email, password));
    }
}
