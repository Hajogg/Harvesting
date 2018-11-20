import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { Harvest } from '../shared/harvest';
import { HarvestFactory } from '../shared/harvest-factory';
import { HarvestingService } from '../shared/harvesting.service';
import { HarvestDetailComponent} from './index';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HarvestDetailComponent,
  ],
  exports: [
    HarvestDetailComponent,
  ],
  providers: [
    HarvestingService
  ],
})

export class HarvestDetailModule { }