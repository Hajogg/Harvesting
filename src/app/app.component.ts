import { Component, OnInit, ViewChild  } from '@angular/core';
// import { AF } from "../providers/af";
import {HarvestingService} from "./shared/harvesting.service"
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { TranslateService } from '@ngx-translate/core';
import { MatSidenav } from '@angular/material';
import { LocalStorageService } from 'ng2-webstorage';

import { SidenavService } from './layout/sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
   @ViewChild('sidenav') public sidenav: MatSidenav;
  public isLoggedIn: boolean;
  user: Observable<firebase.User>;
  userDisplayName:  Observable<string>;
  userEmail:  Observable<string>;
  constructor(
      public afService: HarvestingService, 
      private router: Router, 
      private translate: TranslateService,
      private localStorage: LocalStorageService,
      private sidenavService: SidenavService) {
     // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(this.localStorage.retrieve('language') || 'en');
    //this.router.navigate(['']);
    this.isLoggedIn = false;
    this.user = afService.afAuth.authState;
    if (this.user == null)
    {
      this.router.navigate(['./login']);
      this.isLoggedIn = false;
    }
    else 
    {
        console.log('hello');
                  console.log("Successfully Logged in.");
          // Set the Display Name and Email so we can attribute messages to them
         this.userDisplayName = afService.afAuth.authState.map(p=>{ return p.displayName});
          this.userEmail =afService.afAuth.authState.map(p=>{return p.email});
          this.isLoggedIn = true;
    }
    
    // This asynchronously checks if our user is logged it and will automatically
    // redirect them to the Login page when the status changes.
    // This is just a small thing that Firebase does that makes it easy to use.
    // this.afService.af.auth.subscribe(
    //   (auth) => {
    //     if(auth == null) {
    //       console.log("Not Logged in.");
    //       this.router.navigate(['login']);
    //       this.isLoggedIn = false;
    //     }
    //     else {
    //       console.log("Successfully Logged in.");
    //       this.isLoggedIn = true;
    //       // UPDATE: I forgot this at first. Without it when a user is logged in and goes directly to /login
    //       // the user did not get redirected to the home page.
    //       this.router.navigate(['']);
    //     }
    //   }
    // );
  }

   public ngOnInit(): void {
    // Store sidenav to service
    this.sidenavService
      .setSidenav(this.sidenav);
  }
  
  logout() {
    this.afService.logout();
  }
}
