import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent } from './hero-detail.component';
import { FormGuard } from '../../../../../../providers/guards/form/form.guard';

const routes: Routes = [
  { path: '', component: HeroDetailComponent, canDeactivate: [FormGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroDetailRoutingModule { }
