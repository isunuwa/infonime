import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginModule } from './modules/login/login.module';
import { AppLayoutComponent } from './_layouts/app-layout/app-layout.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { FilterModule } from './modules/filter/filter.module';

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
        path: 'filter',
        loadChildren: () => FilterModule,
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
