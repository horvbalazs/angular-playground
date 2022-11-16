import { InjectionToken } from '@angular/core';
import { ColorConfig } from './types/color-config';

export const COLOF_CONFIG_TOKEN = new InjectionToken<ColorConfig>('config');
