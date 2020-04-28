import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { PublicComponent } from './public/public.component';
import { AdminArticleComponent } from './admin/admin-article/admin-article.component';

const routes:Routes = [
  {
    path:'admin',
    loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'article',
    component:AdminArticleComponent
  },
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}