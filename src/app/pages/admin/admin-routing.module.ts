import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../../providers/guards/auth/auth.guard';
import {AdminComponent} from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent, canActivateChild: [AuthGuard], canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
