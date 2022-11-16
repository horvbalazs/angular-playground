import { Component, Inject } from '@angular/core';
import { CommonService } from './common/common.service';
import { COLOF_CONFIG_TOKEN } from './config';
import { ColorConfig } from './types/color-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor() {}
}
