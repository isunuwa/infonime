import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { NavModule } from '../modules/navigation/nav.module';

export const LAYOUT_COMPONENTS = [AppLayoutComponent];

@NgModule({
  declarations: [...LAYOUT_COMPONENTS],
  imports: [CommonModule, RouterModule, NavModule],
  exports: [...LAYOUT_COMPONENTS],
})
export class LayoutModule {}
