import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from 'src/app/shared/color/color.component';

const routes: Routes = [{ path: '', component: ColorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class BlueRoutingModule {}
