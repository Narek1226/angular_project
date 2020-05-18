import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'hero',
      pathMatch: 'full'
    },
    { path: 'hero', loadChildren: () => import('./pages/hero/hero.module').then(m => m.HeroModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
