import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedComponent } from './red.component';

const routes: Routes = [{ path: '', component: RedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class RedRoutingModule {}
