import * as firebase from 'firebase'; // See https://github.com/angular/angularfire2/issues/529
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';



// Must export the config
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyA1JBxBP7OExH50GScnD0kp1SbUCusGE_w",
    authDomain: "harvesting-941cb.firebaseapp.com",
    databaseURL: "https://harvesting-941cb.firebaseio.com",
    projectId: "harvesting-941cb",
    storageBucket: "harvesting-941cb.appspot.com",
    messagingSenderId: "854344617566"
};


export class Config {
  public static FIREBASE_CONFIG = FIREBASE_CONFIG;
}
