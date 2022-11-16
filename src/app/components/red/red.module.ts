import { NgModule } from '@angular/core';
import { COLOR_CONFIG_TOKEN } from 'src/app/config';
import { SharedModule } from 'src/app/shared/shared.module';
import { ColorConfig } from 'src/app/types/color-config';
import { RedRoutingModule } from './red-routing.module';

export const APP_CONFIG: ColorConfig = {
  color: 'red',
};

@NgModule({
  imports: [RedRoutingModule, SharedModule],
  providers: [{ provide: COLOR_CONFIG_TOKEN, useValue: APP_CONFIG }],
})
export class RedModule {}
