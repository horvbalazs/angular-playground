import { Component } from '@angular/core';
import { ColorComponent } from 'src/app/common/color/color.component';

@Component({
  selector: 'app-red',
  templateUrl: '../../common/color/color.component.html',
  styleUrls: ['../../common/color/color.component.sass'],
})
export class RedComponent extends ColorComponent {}
