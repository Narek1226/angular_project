import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ DashboardComponent ],
  imports: [
    DashboardRoutingModule,
    CommonModule
  ]
})
export class DashboardModule { }
