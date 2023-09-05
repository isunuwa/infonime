import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginModule } from './modules/login/login.module';
import { AppLayoutComponent } from './_layouts/app-layout/app-layout.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => DashboardModule,
      },
      {
        path: 'login',
        loadChildren: () => LoginModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
