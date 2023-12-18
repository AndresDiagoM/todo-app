import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// --------- Pages ---------
import { HomeComponent } from './pages/home/home.component';
import { LabsComponent } from './pages/labs/labs.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'labs', component: LabsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {}
