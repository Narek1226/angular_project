import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)},
  { path: 'public', loadChildren: () => import('./pages/public/public.module').then(m => m.PublicModule)},
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), pathMatch: 'full'},
  { path: '**', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
