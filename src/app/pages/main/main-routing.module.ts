import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoreComponent } from './core/core.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CoreComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
