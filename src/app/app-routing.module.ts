import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { PublicComponent } from './public/public/public.component';


const routes: Routes = [
    { path: 'admin', component: AdminComponent},
    { path: 'public', component: PublicComponent},
    { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
