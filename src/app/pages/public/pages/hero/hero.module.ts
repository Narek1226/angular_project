import { NgModule } from '@angular/core';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroesHeaderComponent } from '../../components/heroes-header/heroes-header.component';
import { HeroComponent } from './hero.component';
import { HeroDetailResolver } from './providers/resolvers/hero-detail.resolver';

@NgModule({
  declarations: [ HeroesHeaderComponent, HeroComponent ],
  imports: [
    HeroRoutingModule,
  ],
  providers: [HeroDetailResolver]
})
export class HeroModule { }
