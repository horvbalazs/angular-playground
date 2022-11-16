import { Inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { COLOR_CONFIG_TOKEN } from '../../config';
import { ColorConfig } from '../../types/color-config';

@Injectable()
export class ColorService {
  constructor(
    @Inject(COLOR_CONFIG_TOKEN) private config: ColorConfig,
    private titleService: Title
  ) {}

  public init() {
    this.titleService.setTitle(`${this.config.color} app`);
  }
}
