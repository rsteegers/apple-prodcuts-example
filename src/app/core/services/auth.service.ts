import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { first } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  isSessionStillAvailable(): Promise<User> {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  doLogin({email, password}): Observable<firebase.auth.UserCredential> {
    return from(this.afAuth.signInWithEmailAndPassword(email, password));
  }

  doLogout(): Observable<void> {
    localStorage.removeItem('user');
    return from(this.afAuth.signOut());
  }

  doRegister({ email, password }): Observable<firebase.auth.UserCredential> {
    return from(this.afAuth.createUserWithEmailAndPassword(email, password));
  }
}
