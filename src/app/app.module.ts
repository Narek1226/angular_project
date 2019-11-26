import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PublicModule } from './public/public.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
