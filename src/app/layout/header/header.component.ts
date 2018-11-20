import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService, LocalStorage } from 'ng2-webstorage';

//import { AuthService, UserService } from '../../auth/services/';
import { LocaleModel } from '../../shared/translation/';
import { HeaderComponentResolveInterface } from './interfaces/';
import { SidenavService } from '../sidenav/';

import { HarvestingService } from "./../../shared/harvesting.service"
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public user: any;
  public locales: Array<LocaleModel>;
  @LocalStorage('userName') userName:string = 'unknown';

  /**
   * Constructor of the class.
   *
   * @param {AuthService}         authService
   * @param {ActivatedRoute}      activatedRoute
   * @param {LocalStorageService} localStorage
   * @param {UserService}         userService
   * @param {TranslateService}    translateService
   * @param {SidenavService}      sidenavService
   */
  constructor(
    public authService: HarvestingService,
    private activatedRoute: ActivatedRoute,
    private localStorage: LocalStorageService,
    //private userService: UserService,
    private translateService: TranslateService,
    private sidenavService: SidenavService,
    public router: Router
  ) { }

  /**
   * On component init we need to store current user and make a subscription for token changes so that we
   * get user value to update within login / logout states.
   */
  public ngOnInit(): void {
    this.initializeUser();

    this.localStorage
      .observe('token')
      .subscribe(() => { this.initializeUser(); });
    // this.localStorage
    //   .observe('userName')
    //   .subscribe(() => { 
    //     this.userName = localStorage.getItem('userName'); 
    //     console.log(this.userName);
    //   });

    // Store locales from route resolve
    this.activatedRoute.data.subscribe((data: HeaderComponentResolveInterface) => {
      this.locales = data.locales;
    });
  }

  /**
   * Method to change current language.
   *
   * @param {LocaleModel} locale
   */
  public changeLocale(locale: LocaleModel): void {
    this.translateService.use(locale.code);
  }

  /**
   * Method to toggle application sidenav.
   */
  public toggleSidenav() {
    this.sidenavService
      .toggle()
      .then(() => { });
  }

  /**
   * Helper method to fetch user profile data.
   */
  private initializeUser(): void {
    //this.user = this.userService.profile();
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }
}
