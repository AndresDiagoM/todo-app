import { Routes } from '@angular/router';

// --------- Components ---------
import { LabsComponent } from './website/pages/labs/labs.component';
import { HomeComponent } from './website/pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule)
  }
];
