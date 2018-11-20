import { Component, OnInit } from '@angular/core';
//import {AF} from "../../providers/af";
import {Router} from "@angular/router";
import { HarvestingService } from '../shared/harvesting.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public afService: HarvestingService, private router: Router) {}
  login() {
    this.afService.loginWithGoogle().then((data) => {
      // Send them to the homepage if they are logged in
      this.router.navigate(['']);
    })
  }
  loginWithFacebook() {
    this.afService.loginWithFacebook().then((data) => {
      // Send them to the homepage if they are logged in
      this.router.navigate(['']);
    })
  }

  ngOnInit() {
  }

}
