import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule,
  MatDatepickerModule, 
  NativeDateModule,
  MatTableModule,
  MatNativeDateModule 
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDatepickerModule, 
    NativeDateModule,
    MatTableModule,
    CdkTableModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule 

  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDatepickerModule, 
    NativeDateModule,
    MatTableModule,
    CdkTableModule,
    MatTooltipModule, 
    MatDatepickerModule,
    MatNativeDateModule 
  ],
})

export class MaterialModule { }
