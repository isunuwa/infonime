import { Component, Input } from '@angular/core';
import { Anime } from '../../models/anime.module';

@Component({
  selector: 'app-anime-item',
  templateUrl: './anime-item.component.html',
})
export class AnimeItemComponent {
  @Input('anime') anime!: Anime;
}
