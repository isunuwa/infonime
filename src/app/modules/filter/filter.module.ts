import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterRoutingModule } from './filter-routing.module';
import { FilterComponent } from './components/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimeModule } from '../anime/anime.module';

@NgModule({
  declarations: [FilterComponent],
  imports: [
    CommonModule,
    FilterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AnimeModule
  ],
  exports: [FilterComponent],
})
export class FilterModule {}
