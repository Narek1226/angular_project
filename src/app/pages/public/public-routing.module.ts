import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { FormGuard } from '../../common/guards/form/form.guard';

const routes: Routes = [
    {path: '', redirectTo: 'heroes', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component:  HeroDetailComponent, canDeactivate: [FormGuard] },
    { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
