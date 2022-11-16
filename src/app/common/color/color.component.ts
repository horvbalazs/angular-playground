import { Component, Inject } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { COLOF_CONFIG_TOKEN } from 'src/app/config';
import { ColorConfig } from 'src/app/types/color-config';

@Component({
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.sass']
})
export abstract class ColorComponent {
  public get bgColor(): string {
    return this.config.color;
  }

  public get title(): string {
    return (
      this.config.color.charAt(0).toUpperCase() + this.config.color.slice(1)
    );
  }

  constructor(
    private commonService: CommonService,
    @Inject(COLOF_CONFIG_TOKEN) private config: ColorConfig
  ) {
    this.commonService.init();
  }
}
