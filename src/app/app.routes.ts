import { Routes } from '@angular/router';

// --------- Components ---------
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
