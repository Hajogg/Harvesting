import { NgModule, ModuleWithProviders } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { Config } from './../../config/config';
import { AuthenticationGuard } from './authentication.guard';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
  imports: [
    AngularFireModule.initializeApp(Config.FIREBASE_CONFIG, 'harvesting'),
  ],
})

export class AuthenticationModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthenticationModule,
      providers: [
        AuthenticationGuard
      ]
    };
  }
}
