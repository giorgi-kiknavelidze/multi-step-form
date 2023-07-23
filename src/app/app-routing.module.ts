import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepManagerComponent } from './step-manager/step-manager.component';

const routes: Routes = [
  {
    path: '',
    component: StepManagerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
