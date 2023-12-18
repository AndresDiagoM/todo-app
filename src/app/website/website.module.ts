import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';

// --------- Pages ---------
import { HomeComponent } from './pages/home/home.component';
import { LabsComponent } from './pages/labs/labs.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, WebsiteRoutingModule],
})
export class WebsiteModule {}
