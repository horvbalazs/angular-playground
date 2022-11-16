import { NgModule } from '@angular/core';
import { ColorComponent } from './color/color.component';
import { ColorService } from './color/color.service';

@NgModule({
  providers: [ColorService],
  declarations: [ColorComponent],
})
export class SharedModule {}
