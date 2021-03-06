import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { FooterItemInterface } from './interfaces/';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class FooterComponent {
  public version = 'v.0.7'; //require('../../../../package.json').version;

  public links: FooterItemInterface[] = [
    // {
    //   name: 'GitHub',
    //   url: 'https://github.com/tarlepp/angular2-frontend',
    //   icon: 'web',
    // },
    // {
    //   name: 'FOOTER_LINK_ISSUES',
    //   url: 'https://github.com/tarlepp/angular2-frontend/issues',
    //   icon: 'bug_report',
    //   translate: true,
    // },
    {
      name: 'Hajo Emch',
      url: 'http://www.jazzvinyl.ch',
      icon: 'person',
    },
  ];

  public constructor(private translateService: TranslateService) { }
}
