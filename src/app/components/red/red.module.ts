import { NgModule } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { COLOF_CONFIG_TOKEN } from 'src/app/config';
import { ColorConfig } from 'src/app/types/color-config';
import { RedRoutingModule } from './red-routing.module';
import { RedComponent } from './red.component';

export const APP_CONFIG: ColorConfig = {
  color: 'red',
};

@NgModule({
  imports: [RedRoutingModule],
  providers: [
    { provide: COLOF_CONFIG_TOKEN, useValue: APP_CONFIG },
    CommonService,
  ],
  declarations: [RedComponent],
})
export class RedModule {}
