import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { PaginationComponent } from './components/pagination/pagination.component';

const SHARED_COMPONENTS = [PaginationComponent];

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [CommonModule],
  exports: [...SHARED_COMPONENTS],
})
export class SharedModule {}
