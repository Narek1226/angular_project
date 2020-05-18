import { NgModule } from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroDetailRoutingModule } from './hero-detail-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ HeroDetailComponent ],
  imports: [
    HeroDetailRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class HeroDetailModule { }
