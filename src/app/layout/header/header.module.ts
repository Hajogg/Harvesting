import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent, LocaleResolver } from './index';
import { TranslationModule } from '../../shared/translation/translation.module'
import {HarvestingService} from "./../../shared/harvesting.service"

@NgModule({
  imports: [
    SharedModule,TranslationModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    LocaleResolver,HarvestingService
  ]
})

export class HeaderModule { }
