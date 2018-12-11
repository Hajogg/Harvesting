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
  MatNativeDateModule,
  MatSelectModule
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
    MatNativeDateModule,
    MatSelectModule

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
    MatNativeDateModule,
    MatSelectModule
  ],
})

export class MaterialModule { }
