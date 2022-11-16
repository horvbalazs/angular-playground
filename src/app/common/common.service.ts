import { Inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { COLOF_CONFIG_TOKEN } from '../config';
import { ColorConfig } from '../types/color-config';

@Injectable()
export class CommonService {
  constructor(
    @Inject(COLOF_CONFIG_TOKEN) private config: ColorConfig,
    private titleService: Title
  ) { }

  public init() {
    this.titleService.setTitle(`${this.config.color} app`);
  }
}
