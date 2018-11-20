
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//import {AF} from "../providers/af";
//import {RouterModule, Routes} from "@angular/router";
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationGuard } from './shared/authentication';
//import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HarvestingService } from './shared/harvesting.service';


import { HarvestFormComponent } from './harvest-form/harvest-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HarvestListComponent } from './harvest-list/harvest-list.component';
import { HarvestListDetailComponent } from './harvest-list-detail/harvest-list-detail.component';
import { HarvestDetailModule } from './harvest-detail/harvest-detail.module';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { LayoutModule } from './layout/layout.module';
import { Config } from './config/config';

// // Must export the config
// export const firebaseConfig = {
//    apiKey: "AIzaSyC_xGQlTgYJ5NHXJH_-u4fkTucobRAtPGc",
//     authDomain: "harvesting-2a602.firebaseapp.com",
//     databaseURL: "https://harvesting-2a602.firebaseio.com",
//     projectId: "harvesting-2a602",
//     storageBucket: "harvesting-2a602.appspot.com",
//     messagingSenderId: "371772663665"
// };

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    HarvestFormComponent,
    HarvestListComponent,
    HarvestListDetailComponent
  ],
  imports: [
    
    AngularFireModule.initializeApp(Config.FIREBASE_CONFIG),
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    SharedModule,
    LayoutModule,
    HarvestDetailModule
  ],
  providers: [ HarvestingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
