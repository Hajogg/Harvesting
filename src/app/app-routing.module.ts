import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { HarvestFormComponent } from './harvest-form/harvest-form.component';
import { HarvestListComponent } from './harvest-list/harvest-list.component';
import { HarvestDetailComponent } from './harvest-detail/harvest-detail.component';
import { LoginPageComponent } from './login-page/login-page.component';

// import { BookListComponent } from './book-list/book-list.component';
// import { BookDetailsComponent } from './book-details/book-details.component';
// import { BookFormComponent } from './book-form/book-form.component';

import { AuthenticationGuard } from './shared/authentication';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'harvests/edit/:id',
    component: HarvestFormComponent,
    canActivate: [
          AuthenticationGuard
        ],
  },
  {
    path: 'harvests/edit',
    component: HarvestFormComponent,
    canActivate: [
          AuthenticationGuard
        ],
  },
  {
    path: 'harvests',
    component: HarvestListComponent,
    canActivate: [
          AuthenticationGuard
        ],
  },
  {
    path: 'harvests/:id',
    component: HarvestDetailComponent,
    canActivate: [
          AuthenticationGuard
        ],
  },
  {
    path: 'login',
    component: LoginPageComponent
  }
//   {
//     path: 'admin',
//     component: BookFormComponent
//   },
//   {
//     path: 'admin/:isbn',
//     component: BookFormComponent
//   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }