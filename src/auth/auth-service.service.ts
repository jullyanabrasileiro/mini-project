import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
}

SignUp(email: string, password: string): Observable<any> {
  this.login = true;
  return of(this.afAuth
      .createUserWithEmailAndPassword(email, password));
}

SignIn(email: string, password: string): Observable<any> {
  return of(this.afAuth
      .signInWithEmailAndPassword(email, password));
}
