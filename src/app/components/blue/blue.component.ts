import { Component, Inject } from '@angular/core';
import { ColorComponent } from 'src/app/common/color/color.component';
import { CommonService } from 'src/app/common/common.service';
import { COLOF_CONFIG_TOKEN } from 'src/app/config';
import { ColorConfig } from 'src/app/types/color-config';

@Component({
  selector: 'app-blue',
  templateUrl: '../../common/color/color.component.html',
  styleUrls: ['../../common/color/color.component.sass'],
})
export class BlueComponent extends ColorComponent {}
