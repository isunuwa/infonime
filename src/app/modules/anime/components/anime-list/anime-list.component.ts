import { Component, OnInit } from '@angular/core';

import { AnimeService } from '../../services/anime.service';
import { Anime } from '../../models/anime.module';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
})
export class AnimeListComponent implements OnInit {
  // data
  anime: Anime[] = [];
  airingAnime: Anime[] = [];
  topAnime: Anime[] = [];
  randomAnime!: Anime;
  recommendedAnime: Anime[] = [];

  // carousel variables
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  showNavigationArrows = false;

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.getAiringAnime();
    this.getTopAnime();
  }

  getAnime(): void {
    let queryParams = null;

    this.animeService.getAnimeList(queryParams).subscribe((response) => {
      this.anime = response.data;
    });
  }

  getAiringAnime(): void {
    this.animeService.getAiringAnimeList().subscribe((response) => {
      this.airingAnime = response.data;
    });
  }

  getTopAnime(): void {
    this.animeService.getTopAnimeList().subscribe((response) => {
      this.topAnime = response.data;
    });
  }

  getRandomAnime(): void {
    this.animeService.getRandomAnime().subscribe((response) => {
      this.randomAnime = response.data;
    });
  }
}
