import { NgModule } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { COLOF_CONFIG_TOKEN } from 'src/app/config';
import { ColorConfig } from 'src/app/types/color-config';
import { BlueRoutingModule } from './blue-routing.module';
import { BlueComponent } from './blue.component';

export const APP_CONFIG: ColorConfig = {
  color: 'blue',
};

@NgModule({
  imports: [BlueRoutingModule],
  providers: [
    { provide: COLOF_CONFIG_TOKEN, useValue: APP_CONFIG },
    CommonService,
  ],
  declarations: [BlueComponent],
})
export class BlueModule {}
