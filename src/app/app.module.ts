import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StepsModule } from './steps/steps.module';
import { StepManagerComponent } from './step-manager/step-manager.component';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  declarations: [AppComponent, StepManagerComponent],
  imports: [BrowserModule, AppRoutingModule, StepsModule, SidebarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
