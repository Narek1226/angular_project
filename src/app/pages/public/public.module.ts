import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { PublicRoutingModule } from './public-routing.module';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { HeroesHeaderComponent } from './components/heroes-header/heroes-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, HeroesComponent, HeroDetailComponent, HeroDetailComponent, HeroesHeaderComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PublicModule { }
