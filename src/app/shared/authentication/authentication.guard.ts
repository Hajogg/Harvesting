import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

/**
 * This class implements a guard for routes that require successful authentication.
 */
@Injectable()
export class AuthenticationGuard implements CanActivate {
  /**
   * Constructor of the class
   *
   * @param {AngularFire} angularFire
   * @param {Router}      router
   */
  constructor(
    public afAuth: AngularFireAuth,
    private router: Router
  ) { }

  /**
   * To protect routes from being accessible without authentication, the `canActivate()` method checks that current
   * user has been authenticated via FireBaseAuth service and current auth state is valid. Only then navigation will
   * pass on the requested route. Otherwise user will be redirected to login page.
   *
   * @returns {Observable<boolean>}
   */
  // canActivate(): Observable<boolean> {
  //   return this.afAuth.authState
  //     .take(1)
  //     .map((authState:  FirebaseAuthState) => {
  //       !!authState ? localStorage.setItem('uid', authState.uid) : localStorage.removeItem('uid');

  //       return !!authState;
  //     })
  //     .do(authenticated => {
  //       if (!authenticated) {
  //         this.router.navigate(['/login']);
  //       }
  //     })
  //   ;
  // }
  canActivate(): Observable<boolean> {
    return this.afAuth.authState.map(auth => {
      if (isNullOrUndefined(auth)) {
        localStorage.removeItem('uid');
        localStorage.removeItem('userName');
        this.router.navigate(['/login']);
        return false;
      } else {
        localStorage.setItem('uid', auth.uid);
        localStorage.setItem('userName', auth.displayName);
        var uid = localStorage.getItem('uid');
        return true;
      }
    });
    function isNullOrUndefined<T>(obj: T | null | undefined): obj is null | undefined {
      return typeof obj === "undefined" || obj === null;
    }
  }
}
