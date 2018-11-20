import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MomentModule } from 'angular2-moment';
import { Ng2Webstorage } from 'ng2-webstorage';

// import 'hammerjs';

import { Directives } from './directives/';
import { Services } from './services/';
import { Guards } from './guards/';
import { TranslationModule } from './translation/translation.module';
import { MaterialModule } from './modules/material.module';
import {MatTableModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';

import { AuthenticationModule } from './authentication/authentication.module';
//import { Config } from './../config/config';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MaterialModule,
    AuthenticationModule.forRoot(),
    // FlexLayoutModule,
    MomentModule,
    Ng2Webstorage,
    TranslationModule,
    //Config
  ],
  providers: [
    {
      provide: 'Window',
      useValue: window,
    },
    ...Guards,
    ...Services,
  ],
  exports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    MomentModule,
    //Ng2Webstorage,
    TranslationModule,
    AuthenticationModule,
    //Config
    //...Directives,
  ],
})

export class SharedModule { }
