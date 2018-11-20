// src/app/providers/af.ts
import {Injectable} from "@angular/core";
import { AngularFireModule } from 'angularfire2';
//import { Observable } from 'rxjs/Observable';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Injectable()
export class AF {
  //public items: FirebaseListObservable<any>;
  public displayName: string;
  public email: string;
  // user: Observable<firebase.User>;
  // items: FirebaseListObservable<any[]>;

  constructor(public afAuth: AngularFireAuth, db: AngularFireDatabase) {
    // this.user = afAuth.authState;
    //this.items = db.list('items');
  }
  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithGoogle() {
    return  this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  /**
   * Logs out the current user
   */
  logout() {
    this.afAuth.auth.signOut();
  }
  sendMessage(text) {
    var item = {
      name: text,
      displayName: this.displayName,
      comment: text,
      date: Date.now()
    };
    //this.items.push(item);
  }
}