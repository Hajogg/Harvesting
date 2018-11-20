import { Component,Input, OnInit } from '@angular/core';

import { Harvest } from '../shared/harvest';

@Component({
  selector: 'a.app-harvest-list-detail',
  templateUrl: './harvest-list-detail.component.html',
  styleUrls: ['./harvest-list-detail.component.css']
})
export class HarvestListDetailComponent  {
@Input() harvest: Harvest;
  constructor() { }

}
