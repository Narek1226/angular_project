import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero.component';
import { HeroDetailResolver } from './providers/resolvers/hero-detail.resolver';

const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
    pathMatch: 'full'
  },
  {
    path: 'all',
    loadChildren: () => import('./pages/heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/hero-detail/hero-detail.module').then(m => m.HeroDetailModule),
    resolve: {
      heroDetails: HeroDetailResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
