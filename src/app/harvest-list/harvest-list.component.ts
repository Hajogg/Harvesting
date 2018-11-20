import { Component, OnInit,AfterViewInit,  ChangeDetectorRef } from '@angular/core';

import {DataSource} from '@angular/cdk/table';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Router, CanActivate } from '@angular/router';
//import {Observable} from 'rxjs/Observable';


import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';


import {MatTableModule} from '@angular/material';

import { Harvest } from '../shared/harvest';
import { HarvestingService } from '../shared/harvesting.service';

@Component({
  selector: 'app-harvest-list',
  templateUrl: './harvest-list.component.html',
  styleUrls: ['./harvest-list.component.css']
})
export class HarvestListComponent implements OnInit, AfterViewInit {
 harvestItems: Harvest[] | null;
  dataSource: HarvestDataSource | null;
 displayedColumns = ['name', 'location', 'date', 'action', 'delete', 'edit'];
 harvestDatabase : HarvestDatabase;
 expandedRow: number;

 constructor(
      private hs: HarvestingService,
      private changeDetector: ChangeDetectorRef,
      private router: Router) {
       }

  ngOnInit() {
  
    this.hs.getAll().subscribe(res => 
    {
      this.harvestItems = res;
        this.harvestDatabase = new HarvestDatabase(this.harvestItems);
     this.dataSource = new HarvestDataSource(  this.harvestDatabase);
     this.changeDetector.detectChanges();
    });
    //this.dataSource = new HarvestDataSource(this.harvestDatabase);
    
  }
  ngAfterViewInit() {
		// TODO: Remove this as it is a workaround to make the table visible when the page got reloaded
		this.changeDetector.detectChanges();
	}
 public remove(item: Harvest):void  {
   debugger;
    this.hs.remove(item);
  }
  expandRow(item:Harvest) {
    debugger;
     this.router.navigate(['/harvests/', item.id]);
  }
   public edit(item: Harvest):void  {
   //debugger;
     this.router.navigate(['/harvests/edit/', item.id]);
  }
}

// export class HarvestDataSource extends DataSource<any> {
//   constructor(private _harvestDatabase: HarvestDatabase) {
//     super();
//   }

//   /** Connect function called by the table to retrieve one stream containing the data to render. */
//   connect(): Observable<Harvest[]> {
//     return this._harvestDatabase.dataChange;
//   }

//   disconnect() {}
// }

export class HarvestDataSource extends DataSource<Harvest> {
  constructor(private _harvestDatabase: HarvestDatabase) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Harvest[]> {
      console.log('HarvestDataSource#connect')
      //debugger;
    return this._harvestDatabase.dataChange;
  }

  disconnect() {}
}


export class HarvestDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<Harvest[]> = new BehaviorSubject<Harvest[]>([]);
  get data(): Harvest[] { return this.dataChange.value; }

  constructor(private harvests:Harvest[]) {
  
              //debugger;
              this.dataChange.next(harvests)
  
  }


  
}