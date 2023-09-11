import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { AnimeRoutingModule } from './anime-routing.module';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { AnimeDetailComponent } from './components/anime-detail/anime-detail.component';

@NgModule({
  declarations: [AnimeListComponent, AnimeDetailComponent],
  imports: [CommonModule, AnimeRoutingModule, NgbCarouselModule],
  exports: [AnimeListComponent, AnimeDetailComponent],
})
export class AnimeModule {}
