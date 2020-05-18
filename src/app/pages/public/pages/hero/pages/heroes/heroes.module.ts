import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ HeroesComponent ],
  imports: [
    HeroesRoutingModule,
    CommonModule
  ],
})
export class HeroesModule { }
