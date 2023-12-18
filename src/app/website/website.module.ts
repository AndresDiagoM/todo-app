import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { WebsiteRoutingModule } from './website-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterOutlet,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
