import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { Harvest } from '../shared/harvest';
import { Action } from '../domain/action';
import { HarvestFactory } from '../shared/harvest-factory';
import { HarvestingService } from '../shared/harvesting.service';
import { HarvestFormErrorMessages } from './harvest-form-error-messages';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-harvest-form',
  templateUrl: './harvest-form.component.html',
  styleUrls: ['./harvest-form.component.css']
})
export class HarvestFormComponent implements OnInit {
  harvest = HarvestFactory.empty();
  actions: Action = {id: '', name:'Erten'};  
  errors: { [key: string]: string } = {};
  isUpdatingHarvest = false;
  myForm: FormGroup;
    constructor(
    private fb: FormBuilder,
    private hs: HarvestingService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
      const id = this.route.snapshot.params['id'];
    if (id) {
      this.isUpdatingHarvest = true;
      this.hs.getSingle(id)
        .subscribe(harvest => {
          this.harvest = harvest;
          this.initHarvest();
        });
    }
    else {
        this.isUpdatingHarvest = false;
    }
    this.initHarvest();
  }

 initHarvest() {

    this.myForm = this.fb.group({
      name: [this.harvest.name, Validators.required],
      comment: this.harvest.comment,
      location: this.harvest.location,
      action: this.harvest.action,
      date: this.harvest.jsDate,
      isPublic: this.harvest.isPublic
    });
    console.log(this.harvest.date);
    this.myForm.statusChanges.subscribe(() => this.updateErrorMessages());
  }
    submitForm() {
    // filter empty values
   

    const harvest: Harvest = HarvestFactory.fromObject(this.myForm.value);
    harvest.userId = localStorage.getItem('uid');
    if (this.isUpdatingHarvest) {
      const id = this.route.snapshot.params['id'];
      this.hs.update(id, harvest);
      this.snackBar.open('Der Datensatz wurde erfolgreich gespeichert!', 'Gespeichert', {
        duration: 3000 });
      // .subscribe(res => {
      //   this.router.navigate(['../../books', book.isbn], { relativeTo: this.route });
      // });
      this.router.navigate(['/harvests/']);
    } else 
    {
      // this.hs.create(harvest).subscribe(res => {
      //   this.harvest = HarvestFactory.empty();
      //   this.myForm.reset(HarvestFactory.empty());
      // });

      this.hs.create(harvest); 
      this.harvest = HarvestFactory.empty();
      this.myForm.reset(HarvestFactory.empty());
      this.snackBar.open('Der Datensatz wurde erfolgreich gespeichert!', 'Gespeichert', {
    duration: 3000
  });
    }
   
  }
   updateErrorMessages() {
    this.errors = {};
    for (const message of HarvestFormErrorMessages) {
      const control = this.myForm.get(message.forControl);
      if (control &&
          control.dirty &&
          control.invalid &&
          control.errors[message.forValidator] &&
          !this.errors[message.forControl]) {
        this.errors[message.forControl] = message.text;
      }
    }
  }
}
