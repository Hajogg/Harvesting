import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { FooterComponent } from './index';
import { TranslationModule } from '../../shared/translation/translation.module'
@NgModule({
  imports: [
    SharedModule,TranslationModule
  ],
  declarations: [
    FooterComponent,
  ],
  exports: [
    FooterComponent,
  ],
})

export class FooterModule { }
