import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { COLOR_CONFIG_TOKEN } from 'src/app/config';
import { ColorConfig } from 'src/app/types/color-config';
import { BlueRoutingModule } from './blue-routing.module';

export const APP_CONFIG: ColorConfig = {
  color: 'blue',
};

@NgModule({
  imports: [BlueRoutingModule, SharedModule],
  providers: [{ provide: COLOR_CONFIG_TOKEN, useValue: APP_CONFIG }],
})
export class BlueModule {}
