import { NgModule } from '@angular/core';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroesHeaderComponent } from '../../components/heroes-header/heroes-header.component';
import { HeroComponent } from './hero.component';

@NgModule({
  declarations: [ HeroesHeaderComponent, HeroComponent ],
  imports: [
    HeroRoutingModule,
  ]
})
export class HeroModule { }
