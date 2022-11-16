import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'red',
    loadChildren: () =>
      import('src/app/components/red/red.module').then((m) => m.RedModule),
  },
  {
    path: 'blue',
    loadChildren: () =>
      import('src/app/components/blue/blue.module').then((m) => m.BlueModule),
  },
  { path: '', redirectTo: 'red', pathMatch: 'full' },
  { path: '**', redirectTo: 'red' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
