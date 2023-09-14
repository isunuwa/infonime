import { Component, OnInit } from '@angular/core';

import { AnimeService } from '../../services/anime.service';
import { Anime } from '../../models/anime.module';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
})
export class AnimeListComponent implements OnInit {
  // data
  animes: Anime[] = [];
  airingAnimes: Anime[] = [];
  topAnimes: Anime[] = [];
  randomAnime!: Anime;
  recommendedAnimes: Anime[] = [];

  // carousel variables
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  showNavigationArrows = false;

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    // this.getAiringAnimes();
    // this.getTopAnimes();
  }

  getAnimes(): void {
    let queryParams = null;

    this.animeService.getAnimeList(queryParams).subscribe((response) => {
      this.animes = response.data;
    });
  }

  getAiringAnimes(): void {
    this.animeService.getAiringAnimeList().subscribe((response) => {
      this.airingAnimes = response.data;
    });
  }

  getTopAnimes(): void {
    this.animeService.getTopAnimeList().subscribe((response) => {
      this.topAnimes = response.data;
    });
  }

  getRandomAnime(): void {
    this.animeService.getRandomAnime().subscribe((response) => {
      this.randomAnime = response.data;
    });
  }
}
