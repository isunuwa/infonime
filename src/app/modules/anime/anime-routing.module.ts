import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeListComponent } from './components/anime-list/anime-list.component';

const routes: Routes = [
  {
    path: '',
    component: AnimeListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimeRoutingModule {}
