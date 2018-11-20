import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Harvest } from '../shared/harvest';
import { HarvestFactory } from '../shared/harvest-factory';
import { HarvestingService } from '../shared/harvesting.service';

@Component({
  selector: 'app-harvest-detail',
  templateUrl: './harvest-detail.component.html',
  styleUrls: ['./harvest-detail.component.css']
})

export class HarvestDetailComponent implements OnInit {
harvest: Harvest = HarvestFactory.empty();
   constructor(
    private hs: HarvestingService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.hs.getSingle(params['id'])
      .subscribe(h => this.harvest = h);
  }

}
