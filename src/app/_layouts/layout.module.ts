import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';

export const LAYOUT_COMPONENTS = [AppLayoutComponent];

@NgModule({
  declarations: [...LAYOUT_COMPONENTS],
  imports: [CommonModule, RouterModule],
  exports: [...LAYOUT_COMPONENTS],
})
export class LayoutModule {}
